import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AstronomyPictureOfTtheDayPage } from './pages/apod';

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

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export { Routes };
