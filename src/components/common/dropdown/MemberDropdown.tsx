'use client';

import styled from 'styled-components';
import { MouseEvent, useState } from 'react';
import { DropdownArrowDown, DropdownArrowUp } from 'public/assets/svgs';
import useOutsideClick from '~/hooks/useOutsideClick';
import MemberSelectBox from './MemberSelectBox';
import ProfileBadge from '../display/ProfileBadge';

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

  const toggleIsOpenHandler = (e: MouseEvent) => {
    setIsOpen((prev) => !prev);
    e.stopPropagation();
  };
  const closeHandler = () => setIsOpen(false);
  const wrapper = useOutsideClick(closeHandler);

  return (
    <Wrapper ref={wrapper}>
      <PlaceHolderBox onClick={toggleIsOpenHandler} $isOpen={isOpen}>
        {value.length > 0 && (
          <SelectedMember>
            {value.map((member) => {
              const uuid = self.crypto.randomUUID();
              return <ProfileBadge key={`MemberDropdown-${uuid}`} memberState={member} closeFn={valueHandler} />;
            })}
          </SelectedMember>
        )}
        {value.length === 0 && <PlaceHolderText>{placeHolder}</PlaceHolderText>}
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
  padding: 0 16px;
  height: 50px;
  user-select: none;
  border-radius: 8px;
  border: 1px solid ${({ theme, $isOpen }) => ($isOpen ? theme.colors.agoraBlue[300] : theme.colors.agoraBlack[100])};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.agoraBlack[800]};
  cursor: pointer;
`;
const PlaceHolderText = styled.span`
  color: ${({ theme }) => theme.colors.agoraBlack[300]};
  ${({ theme }) => theme.fontStyle.detail_2}
`;
const SelectedMember = styled.div`
  display: flex;
  gap: 12px;
`;
export default MemberDropdown;
