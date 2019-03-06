import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Logger from 'js-logger';
import store from './store';
import { fetchAPOD } from './actions';
import './index.css';

if(process.env.REACT_APP_LOGGER === 'debug') Logger.useDefaults();

store.dispatch(fetchAPOD());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
