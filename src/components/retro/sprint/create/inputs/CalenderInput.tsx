import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'public/assets/svgs';
import { ko } from 'date-fns/locale';
import { colors } from '~/styles/theme';

interface Props {
  date: Date | null | undefined;
  onDateChange: (date: Date | null) => void;
  className?: string;
}
const CalendarInput = ({ date, onDateChange, className }: Props) => {
  const CustomInput = forwardRef((props: any, ref) => {
    return (
      <CalenderWrapper className={className}>
        <input {...props} ref={ref} type="text" readOnly placeholder="YYYY.MM.DD" />
        <Calendar width="24px" height="24px" fill={colors.agoraBlack[300]} />
      </CalenderWrapper>
    );
  });
  return (
    <DatePicker
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
      // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      selected={date}
      onChange={onDateChange}
      customInput={<CustomInput />}
      locale={ko}
      dateFormat="yyyy.MM.dd"
      showPopperArrow={false}
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
export default CalendarInput;
