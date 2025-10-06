import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { country = 'Canada', course = 'Computer Science', budget = 20000 } = body
  const seed = Math.random()
  const base = [
    { name: `${country} International University`, score: Math.round(80 + seed * 10) },
    { name: `${country} College of ${course.split(' ')[0]}`, score: Math.round(75 + seed * 12) },
    { name: `${country} Tech Institute`, score: Math.round(70 + seed * 15) },
    { name: `${country} Global Academy`, score: Math.round(68 + seed * 14) },
    { name: `${country} Advanced Studies Center`, score: Math.round(65 + seed * 13) }
  ]
  const matches = base
    .map(m => ({ ...m, country, course, estTuition: budget + (Math.floor(Math.random() * 5000) - 2500) }))
    .sort((a, b) => b.score - a.score)
  return NextResponse.json({ matches, generatedAt: new Date().toISOString() })
}

export async function GET() {
  return NextResponse.json({ status: 'ok', usage: 'POST with {country,course,budget}' })
}