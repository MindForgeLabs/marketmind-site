import { z } from 'zod'

// Define required environment variables here.
// Add or relax keys as needed in later phases.
const EnvSchema = z.object({
  // Public site URL used for metadata and canonical links
  NEXT_PUBLIC_SITE_URL: z.string().url().describe('Public site URL, e.g. https://marketmind.ai'),
  // Analytics (optional now, required when enabled)
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  // Sentry DSN (optional now, required when enabled)
  SENTRY_DSN: z.string().url().optional(),
  // Node environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

const parsed = EnvSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  SENTRY_DSN: process.env.SENTRY_DSN,
  NODE_ENV: process.env.NODE_ENV,
})

if (!parsed.success) {
  // Create a readable error in development; in production, throw directly
  const message = parsed.error.errors
    .map((e) => `${e.path.join('.')}: ${e.message}`)
    .join('\n')
  throw new Error(`Invalid environment variables:\n${message}`)
}

export const env = parsed.data
