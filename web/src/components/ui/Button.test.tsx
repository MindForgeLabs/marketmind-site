import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '@/stories/Button'

describe('Button (sample)', () => {
  it('renders provided label', () => {
    render(<Button label="Click me" size="medium" />)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })
})
