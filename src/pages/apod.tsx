import { Paper, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Apod } from '../components/apod';
import {
  formatFeedDate,
  formatFeedDateString,
  getCurentFormattedDate,
} from './utils';

const DateControlsContainer = styled(Paper)`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;

const DateControls = () => {
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
      navigate(`/${date}`);
    }
  };

  return (
    <DateControlsContainer>
      <DatePicker
        sx={{ maxWidth: '300px' }}
        label="Select date"
        onChange={handleDateChange}
        value={dateValue}
      />
    </DateControlsContainer>
  );
};

type APODParams = {
  date: string | undefined;
};

const AstronomyPictureOfTtheDayPage: FC = () => {
  const { date } = useParams<APODParams>();
  const navigate = useNavigate();

  useEffect(() => {
    const result = formatFeedDateString(date);

    if (result === null) {
      const currentDate = getCurentFormattedDate();
      navigate(`/${currentDate}`, { replace: true });
    } else {
      navigate(`/${date}`);
    }
  }, [date]);

  if (!date) {
    return null;
  }

  return (
    <>
      <DateControls />
      <Apod date={date} />
    </>
  );
};

export { AstronomyPictureOfTtheDayPage };
