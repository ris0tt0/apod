import React from 'react';
import { render } from 'react-dom';
import Logger from 'js-logger';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { App } from './app';
import { store } from './store';
import { setName } from './actions';
import { Provider } from 'react-redux';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { CssBaseline } from '@mui/material';

if (process.env.mode == 'development') {
  Logger.useDefaults();
}

store.dispatch(setName('jonathan gee'));

const theme = createTheme({
  palette: { mode: 'dark' },
});

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <CssBaseline />
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('jay-app')
);
