import { Button, Paper, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APODParams } from '../../routes';
import { formatFeedDate, formatFeedDateString } from '../../utils';

const DateControlsContainer = styled(Paper)`
  display: flex;
  flex: 1;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;

export const DateControls = () => {
  const { date } = useParams<APODParams>();
  const navigate = useNavigate();
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
      // navigate(`/${date}`);
      setDateValue(event);
    }
  };

  const handleClick = () => {
    const date = formatFeedDate(dateValue);
    navigate(`${date}`);
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
