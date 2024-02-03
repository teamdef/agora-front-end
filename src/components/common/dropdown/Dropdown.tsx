'use client';

import styled from 'styled-components';
import DateListBox from './DateListBox';
import MemberListBox from './MemberListBox';
import TimeSelectBox from './TimeSelectBox';
import { useState } from 'react';
import { DropdownArrowDown, DropdownArrowUp } from 'public/assets/svgs';
import useOutsideClick from '~/hooks/useOutsideClick';

// interface DropdownMemberStatus {
//   profileImage: string;
//   nickname: string;
// }

interface DropdownProps {
  type: 'time' | 'user';
  placeHolder: string;
  value: string | null;
  valueHandler: (value: string) => void;
  scrollPerView?: number;
  //   userData?: DropdownMemberStatus[];
}

const Dropdown = ({ type, valueHandler, value, placeHolder, scrollPerView }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpenHandler = () => setIsOpen((prev) => !prev);
  const closeHandler = () => setIsOpen(false);

  const wrapper = useOutsideClick(closeHandler);

  return (
    <Wrapper ref={wrapper}>
      <PlaceHolderBox onClick={toggleIsOpenHandler} $isOpen={isOpen} $value={value}>
        {value ?? placeHolder}
        {isOpen ? <DropdownArrowUp /> : <DropdownArrowDown />}
      </PlaceHolderBox>
      {isOpen && type === 'time' && (
        <TimeSelectBox
          value={value}
          valueHandler={valueHandler}
          closeHandler={closeHandler}
          scrollPerView={scrollPerView}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const PlaceHolderBox = styled.div<{ $isOpen: boolean; $value: string | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14.5px 16px;
  user-select: none;
  border-radius: 8px;
  border: 1px solid ${({ theme, $isOpen }) => ($isOpen ? theme.colors.agoraBlue[300] : theme.colors.agoraBlack[100])};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, $value }) => ($value ? theme.colors.agoraBlack[800] : theme.colors.agoraBlack[300])};
  cursor: pointer;
`;
export default Dropdown;
