import axios from 'axios';
import { setCurrentDate } from '.';

export const REQUESTING_APOD = 'requesting apod';
export const REQUESTING_APOD_ERROR = 'requesting apod error';
export const REQUESTING_APOD_RESULT = 'requesting apod result';

export const requestApod =
  (date) =>
  (dispatch, getState, { api_key }) => {
    const state = getState();
    if (state.apod.apodResultMap.has(date)) {
      dispatch(requestingApod(false));
      return Promise.resolve();
    }
    dispatch(requestingApod(true));

    return axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          date,
          api_key,
        },
      })
      .then((result) => {
        return result.data;
      })
      .then((json) => dispatch(requestingApodResult(json)))
      .catch((error) => dispatch(requestingApodError(error)))
      .finally(() => dispatch(requestingApod(false)));
  };
export const requestingApod = (payload) => ({ type: REQUESTING_APOD, payload });
export const requestingApodError = (payload) => ({
  type: REQUESTING_APOD_ERROR,
  payload,
});
export const requestingApodResult = (payload) => ({
  type: REQUESTING_APOD_RESULT,
  payload,
});
