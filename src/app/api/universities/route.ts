import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const country = searchParams.get('country')
    const field = searchParams.get('field')
    const minBudget = searchParams.get('minBudget')
    const maxBudget = searchParams.get('maxBudget')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50)
    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {}
    
    if (country) {
      where.country = {
        contains: country,
        mode: 'insensitive'
      }
    }
    
    if (minBudget || maxBudget) {
      where.tuitionEstimate = {}
      if (minBudget) where.tuitionEstimate.gte = parseInt(minBudget)
      if (maxBudget) where.tuitionEstimate.lte = parseInt(maxBudget)
    }

    // Course filtering
    let courseWhere: any = {}
    if (field) {
      courseWhere.name = {
        contains: field,
        mode: 'insensitive'
      }
    }

    const universities = await prisma.university.findMany({
      where,
      include: {
        courses: Object.keys(courseWhere).length > 0 ? {
          where: courseWhere,
          take: 5
        } : {
          take: 5
        },
        _count: {
          select: {
            courses: true,
            applications: true
          }
        }
      },
      skip,
      take: limit,
      orderBy: {
        ranking: 'asc'
      }
    })

    const total = await prisma.university.count({ where })

    return NextResponse.json({
      universities,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get universities error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch universities' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    // This would typically be admin-only
    const body = await req.json()
    
    const university = await prisma.university.create({
      data: {
        name: body.name,
        country: body.country,
        city: body.city,
        ranking: body.ranking,
        tuitionEstimate: body.tuitionEstimate,
        website: body.website,
        description: body.description,
        requirements: body.requirements,
        intakes: body.intakes || [],
        scholarships: body.scholarships
      }
    })

    return NextResponse.json({
      message: 'University created successfully',
      university
    }, { status: 201 })

  } catch (error) {
    console.error('Create university error:', error)
    return NextResponse.json(
      { error: 'Failed to create university' },
      { status: 500 }
    )
  }
}