import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Logger from 'js-logger';
import store from './store';
import { sayMyNameDelay, setMyCounter } from './actions';
import { Provider } from 'react-redux';

Logger.useDefaults();

store.dispatch(setMyCounter(0xf));
store.dispatch(sayMyNameDelay('jay',2000));
Logger.info('asdfasf');

ReactDOM.render(
	<Provider store={store} >
		<React.StrictMode>
			<App />
		</React.StrictMode>
  </Provider>,
  document.getElementById('apod')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
