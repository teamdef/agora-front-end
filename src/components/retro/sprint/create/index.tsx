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
import useTextFieldInput from '~/hooks/useTextFieldInput';
import useMemberDrop from '~/hooks/useMemberDrop';
import useDateAndTime from '~/hooks/useDateAndTime';
import { useRouter } from 'next/router';
import { useCreateRetroMutation } from '~/query/retro/retroQueries';
import { CreateRetroDTO } from '~/core/retro/retroService.types';

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
  const router = useRouter();
  const [title, handleTitleChange] = useTextFieldInput('');
  const { initMembers, selectedMembers, memberDropHandler } = useMemberDrop({ init: mockData });
  const { date, handleDateChange, time, handleTimeChange, getDateAndTime } = useDateAndTime();

  const createRetroMutation = useCreateRetroMutation();
  const handleCancel = () => {
    /** 정말로 취소하시겠습니까? 작성하신 정보는 저장되지 않습니다. */
    router.back();
  };

  const handleSubmit = () => {
    /** 새로만들기 api 호출  */
  };

  const test = () => {
    const payload: CreateRetroDTO = {
      projectId: 0,
      createMemberId: 0,
      title: '테스트',
      content: '이건뭐지',
      joinMemberIds: [0],
      createTime: '2024.03.03T15:39:00Z',
    };
    createRetroMutation.mutate(payload, { onSuccess: (data) => console.log(data) });
  };
  const disabled = !title || !date || !time || selectedMembers.length === 0;
  return (
    <Wrapper>
      <button onClick={test}>xfdfff</button>
      <HeaderSection>
        <Text variant="headline_1" color={colors.agoraBlack[900]}>
          새로만들기
        </Text>
        <MenuDepth menuDepth={['스프린트회고', '새로만들기']} />
      </HeaderSection>
      <ContentSection>
        <FormRow label="제목" required>
          <RetroTitleForm>
            <NormalTextField value={title} maxLength={20} onChange={handleTitleChange} />
          </RetroTitleForm>
        </FormRow>

        <FormRow label="회고날짜" required>
          <RetroDateForm>
            <CalendarInput date={date} onDateChange={handleDateChange} className="calender-input" />
            <TimeInput time={time} onTimeChange={handleTimeChange} className="time-input" />
          </RetroDateForm>
        </FormRow>
        <FormRow label="참여자" required>
          <MemberDropdown
            selected={selectedMembers}
            placeHolder="회고의 참여자를 선택해주세요."
            valueHandler={memberDropHandler}
            memberList={initMembers}
          />
        </FormRow>
      </ContentSection>
      <ButtonGroupSection>
        <Button label="취소" outlined onClick={handleCancel} />
        <Button label="등록" disabled={disabled} onClick={handleSubmit} />
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
const RetroTitleForm = styled.div`
  margin-top: 23px;
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
