import { DesktopDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Logger from 'js-logger';
import React from 'react';
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

  const handleDateChange = (date) => {
    Logger.info(date);
    const newDate = format(date, 'yyyy-MM-dd');
    dispatch(requestApod(newDate));
    dispatch(setCurrentDate(date));
  };

  Logger.info('PageOne:', isRequesting, requestingError, apodData);

  return (
    <Box
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      {apodData && <APOD {...apodData} />}
    </Box>
  );
};

export { PageOne };
