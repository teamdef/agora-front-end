'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

interface TabProps {
  current: number;
  handler: (idx: number) => void;
  menu: string[];
}
const Tab = ({ current, handler, menu }: TabProps) => {
  return (
    <Wrapper>
      {menu.map((item, idx) => {
        return (
          <TabButton key={`TabButton-${idx}`} onClick={() => handler(idx)} $isFocus={idx === current}>
            <span>{item}</span>
          </TabButton>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
`;
const TabButton = styled.button<{ $isFocus: boolean }>`
  position: relative;
  height: 34px;
  display: flex;
  padding: 0 50px;
  min-width: 168px;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  ${({ theme, $isFocus }) => ($isFocus ? theme.fontStyle.subtitle_2 : theme.fontStyle.body_2)}
  color: ${({ theme, $isFocus }) => ($isFocus ? theme.colors.agoraBlue[400] : theme.colors.agoraBlack[300])};
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme, $isFocus }) =>
      $isFocus ? theme.colors.agoraBlue[400] : theme.colors.agoraBlack[50]};
  }
`;
export default Tab;
