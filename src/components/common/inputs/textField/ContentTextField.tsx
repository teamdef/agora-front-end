import { FontStyleType } from '~/styles/theme';
import { ChangeEvent, MutableRefObject, useRef, useState } from 'react';
import styled from 'styled-components';

interface TextField {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  onBlur?: () => void;
  placeholder?: string;
  fontStyle?: keyof FontStyleType;
}

const ContentTextField = ({ value, onChange, maxLength, placeholder, onBlur, fontStyle }: TextField) => {
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [count, setCount] = useState<number>(value.length);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (textarea.current !== null) {
      textarea.current.style.height = 'auto'; // 높이 초기화
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };
  const valueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= maxLength && count >= maxLength) {
      return null;
    } else if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    onChange(e.target.value);
    setCount(e.target.value.length);
  };
  const onBlurHandler = () => {
    onBlur && onBlur();
    setIsFocus(false);
  };

  const onFocusHandler = () => {
    setIsFocus(true);
  };

  return (
    <Box $value={value} $isFocus={isFocus} $fontStyle={fontStyle}>
      <textarea
        ref={textarea}
        value={value}
        rows={1}
        onChange={valueHandler}
        onInput={handleResizeHeight}
        placeholder={placeholder}
        maxLength={maxLength}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {(isFocus || !value) && (
        <span>
          {value.length} / {maxLength}
        </span>
      )}
    </Box>
  );
};
const Box = styled.div<{ $value: string; $isFocus: boolean; $fontStyle?: keyof FontStyleType }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0 5px;
  textarea {
    position: relative;
    display: block;
    border: none;
    padding: 0;
    ${({ theme, $fontStyle }) => ($fontStyle ? theme.fontStyle[$fontStyle] : theme.fontStyle.body_2)}
    outline-style: none;
    resize: none;
    cursor: ${({ $value }) => ($value ? 'pointer' : 'auto')};
    &:focus {
      cursor: auto;
    }
    white-space: pre-line;
    word-break: break-all;
    &::placeholder {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      ${({ theme }) => theme.fontStyle.detail_2}
      color: ${({ theme }) => theme.colors.agoraBlack[200]};
    }
  }
  span {
    position: relative;
    display: block;
    text-align: right;
    padding-top: 10px;
    padding-right: 2px;
    ${({ theme }) => theme.fontStyle.caption}
    color: ${({ theme }) => theme.colors.agoraBlack[200]};
    &::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({ theme, $isFocus }) =>
        $isFocus ? theme.colors.agoraBlue[300] : theme.colors.agoraBlack[200]};
    }
  }
`;

export default ContentTextField;
