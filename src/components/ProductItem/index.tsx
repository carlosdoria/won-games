import * as S from './styles'

export interface ProductItemProps {
  name: string
  description: string
}

export const ProductItem = ({ name, description }: ProductItemProps) => {
  return (
    <div>
      <S.Test>{name}</S.Test>
      <p>{description}</p>
    </div>
  )
}

