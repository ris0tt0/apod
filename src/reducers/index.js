import produce, { enableMapSet } from 'immer';
import { combineReducers } from 'redux';
import { SET_CURRENT_DATE, SET_NAME } from '../actions';
import {
  REQUESTING_APOD,
  REQUESTING_APOD_ERROR,
  REQUESTING_APOD_RESULT,
} from '../actions/apod';

enableMapSet();

const apod = produce(
  (draft, action) => {
    switch (action.type) {
      case SET_NAME:
        draft.name = action.payload;
        break;
      case REQUESTING_APOD:
        draft.isRequesting = action.payload;
        break;
      case REQUESTING_APOD_ERROR:
        draft.requestingApodError = action.payload;
        break;
      case REQUESTING_APOD_RESULT:
        const key = action.payload.date;
        draft.apodResultMap.set(key, action.payload);
        break;
      case SET_CURRENT_DATE:
        draft.currentDate = new Date(action.payload);
        break;
    }
  },
  {
    name: '',
    currentDate: new Date(),
    isRequesting: null,
    requestingApodError: null,
    apodResultMap: new Map(),
  }
);

const rootReducers = combineReducers({
  apod,
});

export { rootReducers };
