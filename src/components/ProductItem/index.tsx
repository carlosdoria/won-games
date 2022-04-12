export interface ProductItemProps {
  name: string
  description: string
}

export const ProductItem = ({ name, description }: ProductItemProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

