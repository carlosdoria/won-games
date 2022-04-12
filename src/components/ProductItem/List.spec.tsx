import { render, screen } from '@testing-library/react'
import { ProductItem } from '.'

const PRODUCT = {
  name: 'Test name',
  description: 'Test description'
}

describe('Product Item Component', () => {
  it('Render item correctly', () => {
    render(<ProductItem name={PRODUCT.name} description={PRODUCT.description} />)


    expect(
      screen.getByRole( 'heading', { name: /Test name/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()

  })
})
