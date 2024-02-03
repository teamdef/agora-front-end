'use client';

import styled from 'styled-components';
import DateList from './DateListBox';
import MemberList from './MemberListBox';
import TimeList from './TimeListBox';
import { useState } from 'react';
import { Button, Menu, Popover } from '@blueprintjs/core';

// interface DropdownMemberStatus {
//   profileImage: string;
//   nickname: string;
// }

interface DropdownProps {
  placeHolder: string;
  value?: string[];
  //   userData?: DropdownMemberStatus[];
}

const Dropdown = ({ value, placeHolder }: DropdownProps) => {
  return (
    <Wrapper>
      <Popover content={<DateList />} placement="bottom">
        <Button alignText="left" icon="applications" rightIcon="caret-down" text="Open with..." />
      </Popover>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Content = styled.div`
  display: flex;
  padding: 14.5px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[100]};
  background-color: ${({ theme }) => theme.colors.background};
`;
export default Dropdown;
