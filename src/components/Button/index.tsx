import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small',
  fullWidth?: boolean,
  icon?: JSX.Element,
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
} & ButtonTypes

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
