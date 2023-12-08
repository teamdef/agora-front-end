'use client';

import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface TextField {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeholder?: string;
  onBlur: () => void;
}

const TitleTextField = ({ value, onChange, maxLength, placeholder, onBlur }: TextField) => {
  return (
    <Box>
      <input value={value} onChange={onChange} placeholder={placeholder} maxLength={maxLength} onBlur={onBlur} />
    </Box>
  );
};
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0 5px;
  input {
    display: block;
    border: none;
    padding-right: 10px;
    ${({ theme }) => theme.fontStyle.body_1}
    outline-style: none;
    &::placeholder {
      ${({ theme }) => theme.fontStyle.body_1}
      color: ${({ theme }) => theme.colors.agoraBlack[200]};
    }
  }
`;

export default TitleTextField;
