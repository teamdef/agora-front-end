'use client';

import styled from 'styled-components';
import MemberListBox from './MemberSelectBox';
import { useState } from 'react';
import { DropdownArrowDown, DropdownArrowUp } from 'public/assets/svgs';
import useOutsideClick from '~/hooks/useOutsideClick';
import MemberSelectBox from './MemberSelectBox';

export interface DropdownMemberStatus {
  id: number;
  profileImage: string;
  nickname: string;
}

interface DropdownProps {
  memberList: DropdownMemberStatus[];
  placeHolder: string;
  value: DropdownMemberStatus[];
  valueHandler: (value: DropdownMemberStatus) => void;
}

const MemberDropdown = ({ memberList, valueHandler, value, placeHolder }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpenHandler = () => setIsOpen((prev) => !prev);
  const closeHandler = () => setIsOpen(false);

  const wrapper = useOutsideClick(closeHandler);

  return (
    <Wrapper ref={wrapper}>
      <PlaceHolderBox onClick={toggleIsOpenHandler} $isOpen={isOpen}>
        {value.length > 0 && (
          <SelectedMember>
            {value.map((member) => {
              const uuid = self.crypto.randomUUID();
              return <div key={`MemberDropdown-${uuid}`}>{member.nickname}</div>;
            })}
          </SelectedMember>
        )}
        <PlaceHolderText>{value.length === 0 && placeHolder}</PlaceHolderText>
        {isOpen ? <DropdownArrowUp /> : <DropdownArrowDown />}
      </PlaceHolderBox>
      {isOpen && (
        <MemberSelectBox
          value={value}
          valueHandler={valueHandler}
          closeHandler={closeHandler}
          memberList={memberList}
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
const PlaceHolderBox = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14.5px 16px;
  user-select: none;
  border-radius: 8px;
  border: 1px solid ${({ theme, $isOpen }) => ($isOpen ? theme.colors.agoraBlue[300] : theme.colors.agoraBlack[100])};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.agoraBlack[800]};
  cursor: pointer;
`;
const PlaceHolderText = styled.span`
  color: ${({ theme }) => theme.colors.agoraBlack[300]};
`;
const SelectedMember = styled.div`
  display: flex;
`;
export default MemberDropdown;
