'use client';

import { styled } from 'styled-components';
import { ReactNode } from 'react';
import buttonPainter from '~/utils/buttonPainter';

export interface ButtonProps {
  label: string;
  outlined?: boolean;
  color?: string;
  icon?: ReactNode;
  disabled?: boolean;
  small?: boolean;
  onClick?: () => void;
}

type ButtonStyleProps = Pick<ButtonProps, 'outlined' | 'small' | 'disabled'>;

const Button = ({ label, icon, outlined, small, disabled, onClick }: ButtonProps) => {
  return (
    <Box $style={{ outlined, small, disabled }} onClick={onClick}>
      <span>{label}</span>
      {icon}
    </Box>
  );
};

const Box = styled.button<{ $style: ButtonStyleProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  & span {
    ${({ theme }) => theme.fontStyle.body_1}
  }
  & svg {
    margin-left: 8px;
  }
  width: ${({ $style }) => ($style.small ? '120px' : '168px')};
  height: ${({ $style }) => ($style.small ? '36px' : '44px')};
  ${({ $style }) => buttonPainter($style.outlined, $style.disabled)}
`;

export default Button;
