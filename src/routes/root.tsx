import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DateControls } from '../components/date';
import { styled } from '@mui/material';

const ApodHeader = styled('header')`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ApodFooter = styled('footer')`
  margin: 0 1rem;
`;

export const RootRoute: FC = () => {
  return (
    <>
      <ApodHeader>
        <b>
          <i>
            Due to the lapse in federal government funding, NASA is not updating
            their API.
          </i>
        </b>
        <h1>Astronomy Picture of the day. </h1>
      </ApodHeader>
      <main>
        <DateControls />
        <Outlet />
      </main>
      <ApodFooter>&copy; Jonathan Gee</ApodFooter>
    </>
  );
};
