import styled from 'styled-components';
import DateInput from './CalenderInput';
import TimeInput from './TimeInput';
import Text from '~/components/common/typo/Text';
import { PropsWithChildren } from 'react';
import FormRow from './FormRow';

const CreateForm = () => {
  return (
    <Wrapper>
      <FormRow label="회고날짜" required>
        <div>
          <DateInput />
          <TimeInput />
        </div>
      </FormRow>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const RetroDateForm = styled.div`
  .label {
  }
`;
export default CreateForm;
