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
}

const Button = ({ label, icon, outlined, disabled }: ButtonProps) => {
  const buttonStyle = buttonPainter(outlined, disabled);

  return (
    <ButtonBox $buttonStyle={buttonStyle}>
      <span>{label}</span>
      {icon}
    </ButtonBox>
  );
};

const ButtonBox = styled.button<{ $buttonStyle: RuleSet<object> }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $buttonStyle }) => $buttonStyle}
  width: 120px;
  height: 48px;
  border-radius: 6px;
  cursor: pointer;
  & span {
    ${({ theme }) => theme.fontStyle.body_1}
  }
  & svg {
    margin-left: 8px;
  }
`;

export default Button;
