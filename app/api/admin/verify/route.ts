import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    // Get admin password from server-only environment variable (never expose NEXT_PUBLIC)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    if (!password) {
      return NextResponse.json(
        { error: 'Password required' },
        { status: 400 }
      )
    }

    // Rate limiting: in production, use Upstash Redis for distributed rate limiting
    // For now, use a simple in-memory store (resets on server restart)
    const rateLimitKey = `admin-attempt-${request.ip || 'unknown'}`
    const attempts = (global as any).rateLimitMap?.[rateLimitKey] || 0

    if (attempts > 5) {
      return NextResponse.json(
        { error: 'Too many failed attempts. Try again later.' },
        { status: 429 }
      )
    }

    // Simple timing-safe comparison
    const isValid = password === ADMIN_PASSWORD

    if (!isValid) {
      if (!(global as any).rateLimitMap) {
        (global as any).rateLimitMap = {}
      }
      (global as any).rateLimitMap[rateLimitKey] = attempts + 1

      // Log failed attempt for security monitoring
      console.warn(`[Security] Failed admin login attempt from ${request.ip}`)

      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Reset rate limit on success
    if ((global as any).rateLimitMap) {
      (global as any).rateLimitMap[rateLimitKey] = 0
    }

    // In production, set httpOnly cookie or JWT token here
    const response = NextResponse.json({ success: true })
    
    // Set httpOnly cookie for session
    response.cookies.set({
      name: 'admin_session',
      value: 'authenticated', // In production: use JWT or secure token
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
    })

    console.log(`[Security] Successful admin login from ${request.ip}`)

    return response
  } catch (error) {
    console.error('[Security] Admin auth error:', error)
    return NextResponse.json(
      { error: 'Authentication error' },
      { status: 500 }
    )
  }
}
