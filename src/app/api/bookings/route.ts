import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'
import { z } from 'zod'

const bookingSchema = z.object({
  counsellorId: z.string(),
  scheduledAt: z.string().datetime(),
  duration: z.number().min(30).max(180).default(60),
  notes: z.string().optional()
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const validatedData = bookingSchema.parse(body)

    // Check if counsellor exists and is available
    const counsellor = await prisma.counsellor.findUnique({
      where: { id: validatedData.counsellorId },
      include: { user: true }
    })

    if (!counsellor) {
      return NextResponse.json(
        { error: 'Counsellor not found' },
        { status: 404 }
      )
    }

    if (!counsellor.available) {
      return NextResponse.json(
        { error: 'Counsellor is not available' },
        { status: 400 }
      )
    }

    // Check for time conflicts
    const scheduledAt = new Date(validatedData.scheduledAt)
    const endTime = new Date(scheduledAt.getTime() + validatedData.duration * 60000)

    const conflictingBookings = await prisma.booking.findMany({
      where: {
        counsellorId: validatedData.counsellorId,
        status: { in: ['PENDING', 'CONFIRMED'] },
        AND: [
          { scheduledAt: { lt: endTime } },
          {
            scheduledAt: {
              gte: new Date(scheduledAt.getTime() - 60 * 60000) // 1 hour buffer
            }
          }
        ]
      }
    })

    if (conflictingBookings.length > 0) {
      return NextResponse.json(
        { error: 'Time slot is not available' },
        { status: 400 }
      )
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        counsellorId: validatedData.counsellorId,
        scheduledAt,
        duration: validatedData.duration,
        notes: validatedData.notes,
        status: 'PENDING'
      },
      include: {
        counsellor: {
          include: { user: true }
        }
      }
    })

    // TODO: Send notification emails/SMS

    return NextResponse.json({
      message: 'Booking created successfully',
      booking: {
        id: booking.id,
        scheduledAt: booking.scheduledAt,
        duration: booking.duration,
        status: booking.status,
        counsellor: {
          name: booking.counsellor.user.name,
          specialties: booking.counsellor.specialties
        }
      }
    }, { status: 201 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Booking creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const bookings = await prisma.booking.findMany({
      where: { userId: session.user.id },
      include: {
        counsellor: {
          include: { user: true }
        }
      },
      orderBy: { scheduledAt: 'desc' }
    })

    return NextResponse.json({
      bookings: bookings.map(booking => ({
        id: booking.id,
        scheduledAt: booking.scheduledAt,
        duration: booking.duration,
        status: booking.status,
        notes: booking.notes,
        counsellor: {
          name: booking.counsellor.user.name,
          specialties: booking.counsellor.specialties,
          rating: booking.counsellor.rating
        }
      }))
    })

  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}