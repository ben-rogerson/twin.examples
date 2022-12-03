import { render, screen } from '@testing-library/react'
import Test from '@/components/Test'

describe('Test', () => {
  it('finds the word test', () => {
    render(<Test />)

    const text = screen.getByText(/test/i)

    expect(text).toBeInTheDocument()
  })
})
