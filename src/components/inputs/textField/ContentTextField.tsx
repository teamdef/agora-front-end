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

const ContentTextField = ({ value, onChange, maxLength, placeholder, onBlur }: TextField) => {
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const onBlurHandler = () => {
    onBlur();
    setIsFocus(false);
  };

  const onFocusHandler = () => {
    setIsFocus(true);
  };
  return (
    <Box>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {isFocus ||
        (!value && (
          <span>
            {value.length} / {maxLength}
          </span>
        ))}
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

export default ContentTextField;
