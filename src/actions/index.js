import {RECIEVE_APOD, SET_DATE} from './ActionTypes';
import Logger from 'js-logger'

export const recieveAPOD = date => ({type:RECIEVE_APOD,payload:date});

export function fetchAPOD()
{
	return (dispatch,getState) =>
	{
		const api_key = 'DEMO_KEY';
		const date = getState().selectedDate;

		//formate the date as required by nasa api.
		let day = date.getDate().toString();
		day = day.length>1?day:'0'+day;
		let month = (date.getMonth()+1).toString();
		month = month.length>1?month:'0'+month;
		const nasaDate = `${date.getFullYear()}-${month}-${day}`;

		return fetch(`https://api.nasa.gov/planetary/apod?date=${nasaDate}&api_key=${api_key}`)
		.then( response => response.json() )
		.then( json => dispatch(recieveAPOD(json)));
	}
}

export function setNewDate(date){
	return { type:SET_DATE,date }
}