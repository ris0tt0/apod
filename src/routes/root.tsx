import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DateControls } from '../components/date';

export const RootRoute: FC = () => {
  return (
    <div>
      <DateControls />
      <Outlet />
    </div>
  );
};
