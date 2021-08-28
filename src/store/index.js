import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducers } from '../reducers';

const api_key = process.env.NASA_OPEN_API_KEY ?? 'DEMO_KEY';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api_key })))
);

export { store };
