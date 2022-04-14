import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
};
