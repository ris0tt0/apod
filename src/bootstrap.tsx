import Logger from 'js-logger';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const node = document.getElementById('jay-apod');

if (node) {
  Logger.useDefaults();

  const root = createRoot(node);

  root.render(<App />);
}
