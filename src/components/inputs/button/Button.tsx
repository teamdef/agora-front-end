'use client';

import { styled } from 'styled-components';
import { ReactNode } from 'react';

export interface ButtonProps {
  label: string;
  outlined?: boolean;
  color?: string;
  icon?: ReactNode;
  disabled?: boolean;
  small?: boolean;
}

type ButtonStyleProps = Pick<ButtonProps, 'outlined' | 'small' | 'disabled'>;

const Button = ({ label, icon, outlined, small, disabled }: ButtonProps) => {
  return (
    <Box $style={{ outlined, small, disabled }}>
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

  ${({ $style, theme }) => {
    if (!$style.disabled) {
      if (!$style.outlined) {
        return `
          cursor: pointer;
          background-color: ${theme.colors.agoraBlue[400]};
          color: ${theme.colors.background};
          & svg path {
            fill: ${theme.colors.background};
          }
          &:hover {
            background-color: ${theme.colors.agoraBlue[600]};
            color: ${theme.colors.background};
          }
          &:active {
            background-color: ${theme.colors.agoraBlue[700]};
            color: ${theme.colors.background};
          }
        `;
      } else {
        return `
          background-color: white;
          cursor: pointer;
          border: 1px solid ${theme.colors.agoraBlue[400]};
          & span {
            color: ${theme.colors.agoraBlue[400]};
          }
          & svg path {
            fill: ${theme.colors.agoraBlue[400]};
          }
          &:hover {
            border: 1px solid ${theme.colors.agoraBlue[600]};
            & span {
              color: ${theme.colors.agoraBlue[600]};
            }
            & svg path {
              fill: ${theme.colors.agoraBlue[600]};
            }
          }
          &:active {
            background-color: ${theme.colors.agoraBlue[700]};
            & span {
              color: ${theme.colors.background};
            }
            & svg path {
              fill: ${theme.colors.background};
            }
          }
        `;
      }
    } else {
      if (!$style.outlined) {
        return `
          cursor: default;
          background-color: ${theme.colors.agoraBlue[100]};
          color: ${theme.colors.background};
          & svg path {
            fill: ${theme.colors.background};
          }
        `;
      } else {
        return `
          background-color: white;
          cursor: default;
          color: ${theme.colors.agoraBlack[600]};
          border: 1px solid ${theme.colors.agoraBlack[600]};
          & svg path {
            fill: ${theme.colors.agoraBlack[600]};
          }
        `;
      }
    }
  }}
`;

export default Button;
