import { NextResponse } from 'next/server'
import { AIMatchingService } from '@lib/services/ai-matching'

const aiMatchingService = new AIMatchingService()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate required fields
    if (!body.fullName || !body.preferredCountry || !body.fieldOfStudy) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate AI-powered matches
    const matches = await aiMatchingService.generateMatches(body)
    
    return NextResponse.json({ 
      matches, 
      generatedAt: new Date().toISOString(),
      success: true
    })
  } catch (error) {
    console.error('Error in matches API:', error)
    return NextResponse.json(
      { error: 'Failed to generate matches' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    usage: 'POST with user profile data to get university matches',
    requiredFields: ['fullName', 'preferredCountry', 'fieldOfStudy', 'budget']
  })
}