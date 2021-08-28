import React from 'react';
import { render } from 'react-dom';
import Logger from 'js-logger';
import { App } from './app';
import { store } from './store';
import { setName } from './actions';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

Logger.useDefaults();

store.dispatch(setName('jonathan gee'));

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('jay-app')
);
