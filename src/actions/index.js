import {RECIEVE_APOD, SET_DATE} from './ActionTypes';
import Logger from 'js-logger'

export const recieveAPOD = date => ({type:RECIEVE_APOD,payload:date});

export function fetchAPOD()
{
	return (dispatch,getState) =>
	{
		const api_key = 'DEMO_KEY';
		const date = getState().selectedDate;
		// dispatch(recieveAPOD('date'));
		return fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
		.then( response => response.json() )
		.then( json => dispatch(recieveAPOD(json)));
	}
}

export function setNewDate(date){
	return { type:SET_DATE,date }
}