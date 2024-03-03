import { useState } from 'react';

const useDateAndTime = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [selectedTime, setSelectedTime] = useState<Date | null>();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
  };

  const getDateAndTimeISOString = () => {
    if (!selectedDate || !selectedTime) {
      return new Date().toISOString();
    }
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const date = selectedDate.getDate();
    const hour = selectedTime.getHours();
    const minute = selectedTime.getMinutes();

    const koreaTimeOffset = 9 * 60 * 60 * 1000; // 한국은 UTC+9
    const selected = new Date(year, month, date, hour, minute);
    const result = new Date(selected.getTime() + koreaTimeOffset);
    return result.toISOString();
  };

  return { selectedDate, handleDateChange, selectedTime, handleTimeChange, getDateAndTimeISOString };
};

export default useDateAndTime;
