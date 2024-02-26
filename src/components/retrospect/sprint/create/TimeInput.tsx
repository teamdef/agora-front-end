import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { History } from 'public/assets/svgs';
import { ko } from 'date-fns/locale';
import { colors } from '~/styles/theme';
const TimeInput = () => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(); // const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const CustomInput = forwardRef((props: any, ref) => {
    return (
      <CalenderWrapper>
        <input {...props} ref={ref} type="text" readOnly placeholder="HH:MM" />
        <History width="24px" height="24px" fill={colors.agoraBlack[300]} />
      </CalenderWrapper>
    );
  });
  return (
    <DatePicker
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      selected={selectedTime}
      onChange={(time) => setSelectedTime(time)}
      customInput={<CustomInput />}
      locale={ko}
      showPopperArrow={false}
      showTimeSelect
      showTimeSelectOnly // 오직 시간만 선택할 수 있도록 설정
      timeIntervals={15} // 시간 간격 설정 (기본값은 30분)
      dateFormat="hh:mm" // 시간만 표시하는 형식 설정
    />
  );
};

const CalenderWrapper = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.agoraBlack[100]};
  border-radius: 8px;
  padding: 8px 16px;

  cursor: pointer;
  input[type='text'] {
    font-family: Pretendard;
    flex: 1;
    border: none;
    outline: none;
    padding: 8px 0;
    cursor: pointer;

    ${({ theme }) => theme.fontStyle.body_1}
    color: ${({ theme }) => theme.colors.agoraBlack[800]};
    &::placeholder {
      ${({ theme }) => theme.fontStyle.body_2}
      color: ${({ theme }) => theme.colors.agoraBlack[200]};
    }
  }
`;
export default TimeInput;
