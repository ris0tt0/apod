import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutRoute } from './about';
import { ApodRoute } from './apod';
import { RootRoute } from './root';

export type APODParams = {
  date: string | undefined;
};

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootRoute,
    children: [
      { index: true, Component: AboutRoute },
      { path: ':date', Component: ApodRoute },
    ],
  },
]);

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export { Routes };
