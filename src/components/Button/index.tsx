import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <S.Wrapper>
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};
