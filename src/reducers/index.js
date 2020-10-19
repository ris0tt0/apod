import Logger from 'js-logger';
import { merge } from 'lodash';
import { combineReducers } from 'redux';
import { SET_MY_COUNTER, SET_MY_NAME } from '../actions';
import { SET_APOD, SET_REQUESTING_APOD, SET_REQUESTING_APOD_ERROR } from '../actions/nasa';

function apod(state = {isRequesting:true},action){
	switch(action.type){
		case SET_APOD:
			return merge({},state,action.payload);
		case SET_REQUESTING_APOD:
			return merge({},state,{isRequesting:action.payload});
		case SET_REQUESTING_APOD_ERROR:
			Logger.error(action.payload);
			return merge({},state,{error:action.payload});
		default:
			return state;
	};
};

function counter(state=0,action){
	switch(action.type){
		case SET_MY_COUNTER:
			return action.payload;
		default:
			return state;
	};
};

function name(state='',action){
	switch(action.type){
		case SET_MY_NAME:
			return action.payload;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	counter,
	name,
	apod,
});

export default rootReducer;
