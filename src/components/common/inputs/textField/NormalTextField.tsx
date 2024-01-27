'use client';

import { FontStyleType } from '~/styles/theme';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface TextField {
  value: string;
  maxLength: number;
  onChange: (value: string) => void;
  placeholder?: string;
  fontStyle?: FontStyleType;
}

const NormalTextField = ({ value, onChange, maxLength, placeholder }: TextField) => {
  const [count, setCount] = useState<number>(0);

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
      <input value={value} onChange={valueHandler} placeholder={placeholder} maxLength={maxLength} />
      <span>
        {count} / {maxLength}
      </span>
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
    padding-bottom: 5px;
    ${({ theme }) => theme.fontStyle.body_2}
    outline-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.agoraBlack[200]};
    &:focus {
      transition: 0.5s border-color ease;
      border-bottom: 1px solid ${({ theme }) => theme.colors.agoraBlue[300]};
    }
    &::placeholder {
      ${({ theme }) => theme.fontStyle.body_2}
      color: ${({ theme }) => theme.colors.agoraBlack[200]};
    }
  }
  span {
    text-align: right;
    padding-top: 5px;
    padding-right: 2px;
    ${({ theme }) => theme.fontStyle.caption}
    color: ${({ theme }) => theme.colors.agoraBlack[200]};
  }
`;

export default NormalTextField;
