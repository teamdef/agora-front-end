'use client';

import { FontStyleType } from '~/styles/theme';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface TextField {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  onBlur: () => void;
  placeholder?: string;
  fontStyle?: FontStyleType;
}

const TitleTextField = ({ value, onChange, maxLength, placeholder, onBlur }: TextField) => {
  const [count, setCount] = useState<number>(value.length);

  const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= maxLength && count >= maxLength) {
      return null;
    } else if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    onChange(e.target.value);
    setCount(e.target.value.length);
  };
  return (
    <Box>
      <input value={value} onChange={valueHandler} placeholder={placeholder} maxLength={maxLength} onBlur={onBlur} />
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
