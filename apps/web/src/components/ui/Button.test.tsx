import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from "@marketmind/ui"

describe('Button', () => {
  it('renders provided label', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })
})
