// D:\marketmind\web\vitest.setup.tsx
import '@testing-library/jest-dom'
// next/image
vi.mock('next/image', () => ({
    default: (props: any) => <img { ...props } />,
}))

// next/link
vi.mock('next/link', () => ({
    default: ({ href, children, ...rest }: any) => (
        <a href= { href as string } { ...rest } > { children } < /a>
),
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
; (globalThis as any).ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
}
