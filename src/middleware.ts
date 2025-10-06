import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Rate limiting store (in production, use Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('X-Forwarded-For') || 'unknown'
    const key = `${ip}:${pathname}`
    const now = Date.now()
    const windowMs = 15 * 60 * 1000 // 15 minutes
    const maxRequests = pathname.includes('/matches') ? 10 : 100 // Stricter limit for AI endpoints

    const current = rateLimit.get(key)
    
    if (!current || now > current.resetTime) {
      rateLimit.set(key, { count: 1, resetTime: now + windowMs })
    } else if (current.count >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    } else {
      current.count++
    }
  }

  // Protect authenticated routes
  const protectedPaths = ['/api/documents', '/api/bookings', '/api/profile']
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    const token = await getToken({ req: request })
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
  }

  // Admin-only routes
  const adminPaths = ['/api/universities', '/api/admin']
  if (adminPaths.some(path => pathname.startsWith(path)) && request.method === 'POST') {
    const token = await getToken({ req: request })
    
    if (!token || token.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*']
}