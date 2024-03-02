import styled from 'styled-components';
import { ReactNode } from 'react';
import buttonPainter from '~/utils/buttonPainter';

// default spac
// min-width: 168px height 44px padding: 0 48px

export interface ButtonProps {
  label: string;
  outlined?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  small?: boolean; // 작은 버튼일 때 min-width: 120px, height: 36px
  large?: boolean; // button width 100% 로 만들고 싶을때 height = default
  onClick?: () => void;
}

type ButtonStyleProps = Pick<ButtonProps, 'outlined' | 'small' | 'large' | 'disabled'>;

const Button = ({ label, icon, outlined, large, small, disabled, onClick }: ButtonProps) => {
  return (
    <Box $style={{ outlined, small, large, disabled }} onClick={onClick}>
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

  & span {
    ${({ theme }) => theme.fontStyle.body_1};
  }
  & svg {
    margin-left: 8px;
  }
  white-space: nowrap;
  padding: 0 ${({ $style }) => ($style.small ? '24px' : $style.large ? 0 : '48px')};
  height: ${({ $style }) => ($style.small ? '36px' : '44px')};
  min-width: ${({ $style }) => ($style.small ? '120px' : '168px')};
  width: ${({ $style }) => ($style.large ? '100%' : 'auto')};
  ${({ $style }) => buttonPainter($style.outlined, $style.disabled)};
`;

export default Button;
