import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AstronomyPictureOfTtheDay } from './pages/apod';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AstronomyPictureOfTtheDay />,
  },
  {
    path: '/:date',
    element: <AstronomyPictureOfTtheDay />,
  },
]);

const Routes = () => {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};

export { Routes };
