import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small',
  fullWidth?: boolean,
  icon?: JSX.Element,
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};
