import styled from 'styled-components';
import CalenderInput from './CalenderInput';
import TimeInput from './TimeInput';
import FormRow from './FormRow';
import NormalTextField from '~/components/common/inputs/textField/NormalTextField';
import MemberDropdown, { DropdownMemberStatus } from '~/components/common/dropdown/MemberDropdown';
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

const CreateForm = () => {
  const [memberDrop, setMemberDrop] = useState<DropdownMemberStatus[]>([]);
  const memberDropHandler = (newData: DropdownMemberStatus[]) => {
    setMemberDrop(newData);
  };

  return (
    <Wrapper>
      <FormRow label="제목" required>
        <NormalTextField value={''} maxLength={20} onChange={(e) => console.log(e)} />
      </FormRow>

      <FormRow label="회고날짜" required>
        <RetroDateForm>
          <CalenderInput className="input" />
          <TimeInput className="input" />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const RetroDateForm = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;
  .input {
    width: 360px;
  }
`;
export default CreateForm;
