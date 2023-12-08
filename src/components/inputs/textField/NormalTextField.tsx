'use client';

import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface TextField {
  maxLength: number;
  placeholder?: string;
}
const NormalTextField = ({ maxLength, placeholder }: TextField) => {
  const [text, setText] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Box>
      <input value={text} onChange={onChangeHandler} placeholder={placeholder} maxLength={maxLength} />
      <span>
        {text.length} / {maxLength}
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
    ${({ theme }) => theme.fontStyle.body_1}
    outline-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.agoraBlack[200]};
    &:focus {
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
