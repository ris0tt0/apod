import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AstronomyPictureOfTtheDayPage } from './pages/apod';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: AstronomyPictureOfTtheDayPage },
      { path: ':date', Component: AstronomyPictureOfTtheDayPage },
    ],
  },
]);

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export { Routes };
