import styled from 'styled-components';
import MenuDepth from '~/components/common/etc/MenuDepth';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import MemberDropdown, { DropdownMemberStatus } from '~/components/common/dropdown/MemberDropdown';
import FormRow from './FormRow';
import TimeInput from './inputs/TimeInput';
import CalendarInput from './inputs/CalenderInput';
import NormalTextField from '~/components/common/inputs/textField/NormalTextField';
import { useState } from 'react';

const mockData: DropdownMemberStatus[] = [
  {
    id: 1,
    profileImg: '',
    name: '진현우',
  },
  {
    id: 2,
    profileImg: '',
    name: '전하영',
  },
  {
    id: 3,
    profileImg: '',
    name: '배광호',
  },
  {
    id: 4,
    profileImg: '',
    name: '김성은',
  },
  {
    id: 5,
    profileImg: '',
    name: '이승원',
  },
];

const RetroSprintCreate = () => {
  const [memberDrop, setMemberDrop] = useState<DropdownMemberStatus[]>([]);
  const memberDropHandler = (newData: DropdownMemberStatus[]) => {
    setMemberDrop(newData);
  };

  return (
    <Wrapper>
      <HeaderSection>
        <Text variant="headline_1" color={colors.agoraBlack[900]}>
          새로만들기
        </Text>
        <MenuDepth menuDepth={['스프린트회고', '새로만들기']} />
      </HeaderSection>
      <ContentSection>
        <FormRow label="제목" required>
          <NormalTextField value={''} maxLength={20} onChange={(e) => console.log(e)} />
        </FormRow>

        <FormRow label="회고날짜" required>
          <RetroDateForm>
            <CalendarInput className="calender-input" />
            <TimeInput className="time-input" />
          </RetroDateForm>
        </FormRow>
        <FormRow label="참여자" required>
          <MemberDropdown
            selected={memberDrop}
            placeHolder="회고의 참여자를 선택해주세요."
            valueHandler={memberDropHandler}
            memberList={mockData}
          />
        </FormRow>
      </ContentSection>
      <ButtonGroupSection>
        <Button label="취소" outlined />
        <Button label="등록" disabled />
      </ButtonGroupSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentSection = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const ButtonGroupSection = styled.div`
  width: 100%;
  justify-content: right;
  display: flex;
  gap: 24px;
  position: absolute;
  bottom: 120px;
`;

const RetroDateForm = styled.div`
  display: flex;
  .calender-input {
    width: calc(360px - 16px - 16px);
  }
  .time-input {
    width: calc(360px - 16px - 16px);
    margin-left: 24px;
  }
`;

export default RetroSprintCreate;
