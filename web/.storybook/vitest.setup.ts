/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom'
import React from 'react'
import { vi } from 'vitest'

// next/image
vi.mock('next/image', () => ({
  default: (props: any) => React.createElement('img', props),
}))

// next/link
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: any) =>
    React.createElement('a', { href: href as string, ...rest }, children),
}))

// next/navigation
vi.mock('next/navigation', () => {
  const push = vi.fn(), replace = vi.fn(), back = vi.fn(), prefetch = vi.fn()
  return {
    useRouter: () => ({ push, replace, back, prefetch }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
  }
})

// Recharts and friends expect ResizeObserver in JSDOM
;(globalThis as any).ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
