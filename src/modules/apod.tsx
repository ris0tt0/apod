import { Button, Paper, styled } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { FC, useEffect, useState } from 'react';
import { Apod } from '../components/apod';
import CommandsProvider from '../providers/commands';
import { formatFeedDate, formatFeedDateString } from '../utils';

const DateControlsContainer = styled(Paper)`
  display: flex;
  flex: 1;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;

export const DateControls: FC<{
  date: string;
  setDate: (date: string) => void;
}> = ({ date, setDate }) => {
  const [dateValue, setDateValue] = useState<Date>(new Date());

  useEffect(() => {
    if (date && date.length > 1) {
      const value = formatFeedDateString(date);
      if (value) {
        setDateValue(value);
      }
    }
  }, [date]);

  const handleDateChange = (event: Date | null) => {
    if (event) {
      const date = formatFeedDate(event);
      setDateValue(event);
    }
  };

  const handleClick = () => {
    const date = formatFeedDate(dateValue);
    // navigate(`${date}`);
    setDate(date);
  };

  return (
    <DateControlsContainer>
      <DatePicker
        sx={{ maxWidth: '300px' }}
        label="Select date"
        onChange={handleDateChange}
        value={dateValue}
      />
      <Button variant="outlined" onClick={handleClick}>
        select
      </Button>
    </DateControlsContainer>
  );
};

const ApodModule: FC = () => {
  const [date, setDate] = useState('');

  return (
    <CommandsProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateControls date={date} setDate={setDate} />
        <Apod date={date} />
      </LocalizationProvider>
    </CommandsProvider>
  );
};

export default ApodModule;
