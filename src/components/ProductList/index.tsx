import { ProductItem, ProductItemProps } from "../ProductItem"

interface ProductListProps {
  products: Array<ProductItemProps>
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map( product => (
        <ProductItem
          key={product.name}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  )
}

