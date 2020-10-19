import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const nasa_api_key = (process.env.REACT_APP_NASA_OPEN_API) ?
	process.env.REACT_APP_NASA_OPEN_API :
	'DEMO_KEY';

const store = createStore(rootReducer,composeWithDevTools(
	applyMiddleware(
		thunk.withExtraArgument({nasa_api_key}))
	));

export default store;
