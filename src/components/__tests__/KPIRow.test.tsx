import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

function KPIRow() {
    return <div>Signal Accuracy: 92.7%</div>
}

describe('KPIRow', () => {
    it('renders accuracy metric', () => {
        render(<KPIRow />)
        expect(screen.getByText(/Signal Accuracy/)).toBeInTheDocument()
    })
})
