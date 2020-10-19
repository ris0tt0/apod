import Logger from "js-logger";
import { normzlizeAPOS } from "../normalize/nasa";
import { formatNasaDate } from '../utils';

export const SET_APOD = 'set apod';
export const SET_REQUEST_APOD = 'request apod';
export const SET_REQUESTING_APOD = 'requesting apod';
export const SET_REQUESTING_APOD_ERROR = 'requesting apod error';

export const setAPOD = payload => ({type:SET_APOD,payload});
export const setRequestingAPOD = payload => ({type:SET_REQUESTING_APOD,payload});
export const setRequestingAPODError = payload => ({type:SET_REQUESTING_APOD_ERROR,payload});

export const requestAPOD = (date) => (dispatch,getState,{nasa_api_key}) => {
	const nasaDate = formatNasaDate(date);
	const {apod} = getState();

	if(apod.results.hasOwnProperty(nasaDate)){
		return dispatch(setAPOD({current:nasaDate}));
	}

	dispatch(setRequestingAPOD(true));

	return fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}&date=${nasaDate}`)
		.then(res => res.json())
		.then(json => normzlizeAPOS(json))
		.then(json => dispatch(setAPOD(json)))
		.catch(e => dispatch(setRequestingAPODError(e)))
		.finally(() => dispatch(setRequestingAPOD(false)));
};
