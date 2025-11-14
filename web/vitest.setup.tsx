import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Next.js shims for unit tests:
vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>,
}))

vi.mock('next/navigation', () => {
  const push = vi.fn()
  const replace = vi.fn()
  const back = vi.fn()
  const prefetch = vi.fn()
  return {
    useRouter: () => ({ push, replace, back, prefetch }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
  }
})

// Charts often expect ResizeObserver in JSDOM:
;(globalThis as any).ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
