import React from 'react';
import { MUIProvider } from './mui/provider';
import { Routes } from './routes';

const App = () => {
  return (
    <MUIProvider>
      <Routes />
    </MUIProvider>
  );
};

export { App };
