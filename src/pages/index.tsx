import type { NextPage } from 'next'
import { ProductList } from '../components/ProductList'

const Home: NextPage = () => {
  const PRODUCTS = [
    {
      name: 'a',
      description: 'description a'
    },
    {
      name: 'b',
      description: 'description b'
    },
    {
      name: 'c',
      description: 'description 3'
    },
  ]

  return (
    <ProductList products={PRODUCTS} />
  )
}

export default Home
