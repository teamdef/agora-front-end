'use client';

import { Check, OrangeCircle } from 'public/assets/svgs';
import styled from 'styled-components';
import { theme } from '~/styles/theme';
import { DropdownMemberStatus } from './MemberDropdown';

interface MemberSelectBoxProps {
  memberList: DropdownMemberStatus[];
  value: DropdownMemberStatus[] | null;
  valueHandler: (value: DropdownMemberStatus) => void;
  closeHandler: () => void;
}

const MemberSelectBox = ({ memberList, value, valueHandler, closeHandler }: MemberSelectBoxProps) => {
  const onClickOption = (_value: DropdownMemberStatus) => {
    valueHandler(_value);
    closeHandler();
  };

  return (
    <Wrapper $isBlur={memberList.length > 4}>
      <SelectBox>
        {memberList.map((member: DropdownMemberStatus) => {
          const uuid = self.crypto.randomUUID();
          const isActive = value ? value.includes(member) : false;
          return (
            <Option key={`MemberSelectBox-${uuid}`} onClick={() => onClickOption(member)} $isActive={isActive}>
              <Content>
                <img src={member.profileImage} alt="프로필 이미지" />
                <span>{member.nickname}</span>
              </Content>
              {isActive && <Check viewBox="0 0 25 25" color={theme.colors.agoraBlue[400]} width={18} height={18} />}
            </Option>
          );
        })}
      </SelectBox>
    </Wrapper>
  );
};
const Wrapper = styled.div<{ $isBlur: boolean }>`
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[50]};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
  height: 180px;
  overflow-y: scroll;
  // 스크롤 시 blur 처리
  /* &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, #fff 100%);
  } */
`;
const SelectBox = styled.ul``;
const Option = styled.li<{ $isActive: boolean }>`
  padding: 12px 18px 12px 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.agoraBlack[800] : theme.colors.agoraBlack[600])};

  &:hover {
    color: ${({ theme }) => theme.colors.agoraBlack[800]};
  }
`;
const Content = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    ${({ theme }) => theme.fontStyle.detail_2}
  }
`;
export default MemberSelectBox;
