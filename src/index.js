import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Logger from 'js-logger';

if (process.env.NODE_ENV === 'development') {
  Logger.useDefaults();
}

const container = document.getElementById('jay-apod');
const root = createRoot(container);

root.render(<App />);
