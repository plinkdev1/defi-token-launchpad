import { updateSession } from "@/lib/supabase/middleware"
import type { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)

  // Security Headers
  // Prevent clickjacking attacks
  response.headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Enable XSS protection in older browsers
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.vercel-analytics.com https://va.vercel-analytics.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https: blob:; " +
    "font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com; " +
    "connect-src 'self' https: wss: https://api.supabase.co https://cdn.jsdelivr.net; " +
    "media-src 'self' https:; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'"
  )

  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  )

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
