import { useState } from 'react';

const useDateAndTime = () => {
  const [date, setDate] = useState<Date | null>();
  const [time, setTime] = useState<Date | null>();

  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setTime(time);
  };

  const getDateAndTime = (selectedDate?: Date | null, selectedTime?: Date | null) => {
    if (!selectedDate || !selectedTime) {
      return;
    }
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const date = selectedDate.getDate();
    const hour = selectedTime.getHours();
    const minute = selectedTime.getMinutes();

    const result = new Date(year, month, date, hour, minute);
    return result;
  };

  return { date, handleDateChange, time, handleTimeChange, getDateAndTime };
};

export default useDateAndTime;
