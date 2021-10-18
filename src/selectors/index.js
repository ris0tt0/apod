import { format } from 'date-fns';
import { createSelector } from 'reselect';

export const isRequestingApod = ({ apod }) => apod.isRequesting;
export const requestingApodError = ({ apod }) => apod.requestingApodError;
export const requestingApodResult = ({ apod }) => apod.apodResultMap;
export const getCurrentDate = ({ apod }) => apod.currentDate;

const getResultsMap = ({ apod }) => apod.apodResultMap;

export const getCurrentApod = createSelector(
  [getResultsMap, getCurrentDate],
  (map, date) => {
    const key = format(date, 'yyyy-MM-dd');

    if (map.has(key)) {
      return map.get(key);
    }

    return null;
  }
);
