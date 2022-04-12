import { render, screen } from '@testing-library/react'
import { ProductList } from '.'

const PRODUCTS = [
  {
    name: 'First product',
    description: 'First product description'
  },
  {
    name: 'Second product',
    description: 'Second product description '
  },
  {
    name: 'Third product',
    description: 'Third product description'
  },
]

describe('Product List Component', () => {
  it('Render correctly', () => {
    render(<ProductList products={PRODUCTS} />)
    
    expect(screen.getByText('First product')).toBeInTheDocument()
    expect(screen.getByText('First product description')).toBeInTheDocument()

    expect(screen.getByText('Second product')).toBeInTheDocument()
    expect(screen.getByText('Second product description')).toBeInTheDocument()
    
    expect(screen.getByText('Third product')).toBeInTheDocument()
    expect(screen.getByText('Third product description')).toBeInTheDocument()

  })
})
