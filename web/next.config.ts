import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({ extension: /\.mdx?$/ })

const securityHeaders: { key: string; value: string }[] = [
  // 2 years HSTS, include subdomains, preload
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Clickjacking protection
  { key: 'X-Frame-Options', value: 'DENY' },
  // Basic XSS protection headers
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Permissions Policy (restrict powerful APIs; loosen as needed)
  {
    key: 'Permissions-Policy',
    value:
      'accelerometer=(), camera=(), geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  },
  // Minimal CSP skeleton – refine in a later phase
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      'base-uri "self"',
      'form-action "self"',
    ].join('; '),
  },
]

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: { mdxRs: true },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default withMDX(config)