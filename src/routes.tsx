import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AstronomyPictureOfTtheDayPage } from './pages/apod';
import { useCommands } from './commands/hooks';
import Logger from 'js-logger';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AstronomyPictureOfTtheDayPage />,
  },
  {
    path: '/:date',
    element: <AstronomyPictureOfTtheDayPage />,
  },
]);

// https://apod.nasa.gov/apod/ap240530.html

const Routes = () => {
  const commands = useCommands();

  useEffect(() => {
    Logger.info('Roues::commands.init', commands.isInit);
  }, []);

  return <RouterProvider router={router} />;
};

export { Routes };
