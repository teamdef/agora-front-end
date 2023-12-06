'use client';

import { css } from 'styled-components';
const buttonPainter = (outlined?: boolean, disabled?: boolean) => {
  if (!disabled) {
    if (!outlined) {
      return css`
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.agoraBlue[400]};
        color: ${({ theme }) => theme.colors.background};
        & svg path {
          fill: ${({ theme }) => theme.colors.background};
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.agoraBlue[600]};
          color: ${({ theme }) => theme.colors.background};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.agoraBlue[700]};
          color: ${({ theme }) => theme.colors.background};
        }
      `;
    } else {
      return css`
        background-color: white;
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.agoraBlue[400]};
        & span {
          color: ${({ theme }) => theme.colors.agoraBlue[400]};
        }
        & svg path {
          fill: ${({ theme }) => theme.colors.agoraBlue[400]};
        }
        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.agoraBlue[600]};
          & span {
            color: ${({ theme }) => theme.colors.agoraBlue[600]};
          }
          & svg path {
            fill: ${({ theme }) => theme.colors.agoraBlue[600]};
          }
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.agoraBlue[700]};
          & span {
            color: ${({ theme }) => theme.colors.background};
          }
          & svg path {
            fill: ${({ theme }) => theme.colors.background};
          }
        }
      `;
    }
  } else {
    if (!outlined) {
      return css`
        cursor: default;
        background-color: ${({ theme }) => theme.colors.agoraBlue[100]};
        color: ${({ theme }) => theme.colors.background};
        & svg path {
          fill: ${({ theme }) => theme.colors.background};
        }
      `;
    } else {
      return css`
        background-color: white;
        cursor: default;
        color: ${({ theme }) => theme.colors.agoraBlack[600]};
        border: 1px solid ${({ theme }) => theme.colors.agoraBlack[600]};
        & svg path {
          fill: ${({ theme }) => theme.colors.agoraBlack[600]};
        }
      `;
    }
  }
};

export default buttonPainter;
