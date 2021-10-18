import { DesktopDatePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { format } from 'date-fns';
import Logger from 'js-logger';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../actions';
import { requestApod } from '../actions/apod';
import { APOD } from '../components';
import {
  getCurrentApod,
  getCurrentDate,
  isRequestingApod,
  requestingApodError,
} from '../selectors';

const PageOne = () => {
  const dispatch = useDispatch();
  const isRequesting = useSelector(isRequestingApod);
  const requestingError = useSelector(requestingApodError);
  const selectedDate = useSelector(getCurrentDate);
  const apodData = useSelector(getCurrentApod);

  const handleDateChange = useCallback(
    (date) => {
      Logger.info(date);
      const newDate = format(date, 'yyyy-MM-dd');
      dispatch(requestApod(newDate));
      dispatch(setCurrentDate(date));
    },
    [dispatch]
  );

  Logger.info('PageOne:', isRequesting, requestingError, apodData);

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        m: 3,
      }}
    >
      <DesktopDatePicker
        label="select date"
        inputFormat="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        maxDate={new Date()}
      />
      {apodData && <APOD {...apodData} />}
    </Stack>
  );
};

export { PageOne };
