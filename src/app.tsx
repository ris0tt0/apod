import React, { FC } from 'react';
import { MUIProvider } from './mui/provider';
import { Routes } from './routes';
import { CommandsProvider } from './commands/provider';

const App: FC = () => {
  return (
    <MUIProvider>
      <CommandsProvider>
        <Routes />
      </CommandsProvider>
    </MUIProvider>
  );
};

export default App;
