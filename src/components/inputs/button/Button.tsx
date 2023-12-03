import { styled } from 'styled-components';
import { RuleSet } from 'styled-components/dist/types';
import buttonPainter from '@/utils/buttonPainter';
import { ReactNode } from 'react';

export interface ButtonProps {
  label: string;
  outlined?: boolean;
  color?: string;
  icon?: ReactNode;
  disabled?: boolean;
  small?: boolean;
}

const Button = ({ label, icon, outlined, small, disabled }: ButtonProps) => {
  const buttonStyle = buttonPainter(outlined, disabled);

  return (
    <ButtonBox $buttonStyle={buttonStyle} small={small}>
      <span>{label}</span>
      {icon}
    </ButtonBox>
  );
};

const ButtonBox = styled.button<{ $buttonStyle: RuleSet<object>; small?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $buttonStyle }) => $buttonStyle}
  border-radius: 6px;
  cursor: pointer;
  & span {
    ${({ theme }) => theme.fontStyle.body_1}
  }
  & svg {
    margin-left: 8px;
  }
  width: ${({ small }) => (small ? '120px' : '168px')};
  height: ${({ small }) => (small ? '36px' : '44px')};
`;

export default Button;
