'use client';

import { useState } from 'react';
import styled from 'styled-components';
// 시간 15 분 10 분
interface DateListBoxProps {
  dateList?: string[];
}

const DateListBox = ({ dateList }: DateListBoxProps) => {
  return (
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  );
};
const Wrapper = styled.div`
  ${({ theme }) => theme.fontStyle.detail_2}
  color: ${({ theme }) => theme.colors.agoraBlack[300]};
`;
export default DateListBox;
