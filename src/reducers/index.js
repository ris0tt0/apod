import { combineReducers } from 'redux';
import { SET_MY_COUNTER, SET_MY_NAME } from '../actions';

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
});

export default rootReducer;
