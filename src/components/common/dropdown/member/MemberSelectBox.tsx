import { Check } from 'public/assets/svgs';
import styled from 'styled-components';
import { MemberType } from '~/query/common/commonQueries.types';
import { theme } from '~/styles/theme';

interface MemberSelectBoxProps {
  memberList: MemberType[];
  selected: MemberType[];
  valueHandler: (_value: MemberType) => void;
  closeHandler: () => void;
}

const DEFAULT_PROFILEIMG = '/assets/svgs/UserImage.svg' as const;

const MemberSelectBox = ({ memberList, selected, valueHandler, closeHandler }: MemberSelectBoxProps) => {
  const onClickOption = (_value: MemberType) => {
    valueHandler(_value);
    closeHandler();
  };
  console.log();
  return (
    <Wrapper $isBlur={memberList.length > 4}>
      <SelectBox>
        {memberList.map((member: MemberType) => {
          const uuid = crypto.randomUUID();
          const isActive = selected ? selected.includes(member) : false;
          return (
            <Option key={`MemberSelectBox-${uuid}`} onClick={() => onClickOption(member)} $isActive={isActive}>
              <Content>
                <img src={member.profileImg || DEFAULT_PROFILEIMG} alt="프로필 이미지" />
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
  position: absolute;
  top: 100%;
  padding: 0 8px;
  width: calc(100% - 16px);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.agoraBlack[50]};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.09);
  height: 184px;
  overflow-y: scroll;
  z-index: 1;
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
  padding: 7px 18px 7px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.agoraBlack[800] : theme.colors.agoraBlack[600])};

  &:hover {
    color: ${({ theme }) => theme.colors.agoraBlack[800]};
    border-radius: 4px;
    background: rgba(231, 234, 253, 0.5);
  }
  &:hover {
    span {
      ${({ theme }) => theme.fontStyle.body_1}
    }
  }
`;
const Content = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    ${({ theme }) => theme.fontStyle.body_2}
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 32px;
  }
`;
export default MemberSelectBox;
