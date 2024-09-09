import React from 'react';
import { MUIProvider } from './mui/provider';
import { Routes } from './routes';
import { CommandsProvider } from './commands/provider';

const App = () => {
  return (
    <MUIProvider>
      <CommandsProvider>
        <Routes />
      </CommandsProvider>
    </MUIProvider>
  );
};

export default App;
