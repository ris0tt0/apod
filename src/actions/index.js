import Logger from "js-logger";
import { waitFor } from "../utils";

export const SET_MY_COUNTER = 'set my counter';

export const setMyCounter = payload => ({type:SET_MY_COUNTER,payload});

export const SET_MY_NAME = 'set my name';
export const setMyName = payload => ({type:SET_MY_NAME,payload});

export const sayMyNameDelay = (name,ms) => async dispatch => {
	Logger.info('start');
	await waitFor(ms);

	dispatch(setMyName(name));
}
