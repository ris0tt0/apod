import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { FC } from 'react';
import { CommandsProvider } from './providers/commands';
import { MUIProvider } from './providers/mui';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <MUIProvider>
      <CommandsProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routes />
        </LocalizationProvider>
      </CommandsProvider>
    </MUIProvider>
  );
};

export default App;
