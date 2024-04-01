import styled from 'styled-components';
import MenuDepth from '~/components/common/etc/MenuDepth';
import Text from '~/components/common/typo/Text';
import { colors } from '~/styles/theme';
import Button from '~/components/common/inputs/button/Button';
import MemberDropdown from '~/components/common/dropdown/member/MemberDropdown';
import FormRow from './FormRow';
import TimeInput from './inputs/TimeInput';
import CalendarInput from './inputs/CalenderInput';
import NormalTextField from '~/components/common/inputs/textField/NormalTextField';
import useTextFieldInput from '~/hooks/useTextFieldInput';
import useMemberDrop from '~/hooks/useMemberDrop';
import useDateAndTime from '~/hooks/useDateAndTime';
import { useRouter } from 'next/router';
import { useCreateRetroMutation } from '~/query/retro/retroQueries';
import { useReadCommonMembersQuery } from '~/query/common/commonQueries';
import { useEffect } from 'react';

const RetroSprintCreate = () => {
  const router = useRouter();

  const readCommonMembers = useReadCommonMembersQuery();
  const [title, handleTitleChange] = useTextFieldInput('');
  const { members, initMembers, selectedMembers, memberDropHandler } = useMemberDrop();
  const { selectedDate, handleDateChange, selectedTime, handleTimeChange, getDateAndTimeISOString } = useDateAndTime();

  const createRetroMutation = useCreateRetroMutation();
  const handleCancel = () => {
    /** 페이지 나가기 감지 필요 */
    const isCancel = window.confirm('정말로 취소하시겠습니까? 작성하신 정보는 저장되지 않습니다.');
    if (isCancel) {
      router.back();
    }
  };

  const handleSubmit = async () => {
    const joinMemberIds = selectedMembers.map((member) => member.id);

    const payload = {
      projectId: 1,
      authorId: 1,
      title,
      joinMemberIds,
      content: '',
      createTime: getDateAndTimeISOString(),
    };
    await createRetroMutation.mutateAsync(payload, { onSuccess: () => console.log('등록 성공!!') });
    /** 목록 refetch 필요 */
    window.alert('회고 생성에 성공하였습니다. 목록 화면으로 이동합니다.');
    router.back();
  };

  useEffect(() => {
    if (readCommonMembers.isSuccess) {
      initMembers(readCommonMembers.data);
    }
  }, [readCommonMembers.isSuccess]);

  const disabled = !title || !selectedDate || !selectedTime || selectedMembers.length === 0;

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
          <RetroTitleForm>
            <NormalTextField value={title} maxLength={20} onChange={handleTitleChange} />
          </RetroTitleForm>
        </FormRow>

        <FormRow label="회고날짜" required>
          <RetroDateForm>
            <CalendarInput date={selectedDate} onDateChange={handleDateChange} className="calender-input" />
            <TimeInput time={selectedTime} onTimeChange={handleTimeChange} className="time-input" />
          </RetroDateForm>
        </FormRow>
        {members && (
          <FormRow label="참여자" required>
            <MemberDropdown
              selected={selectedMembers}
              placeHolder="회고의 참여자를 선택해주세요."
              valueHandler={memberDropHandler}
              memberList={members}
            />
          </FormRow>
        )}
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
  }
  gap: 24px;
  .react-datepicker-wrapper {
    max-width: calc(360px - 16px - 16px);
    width: 100%;
  }
  .time-input {
  }
`;

export default RetroSprintCreate;
