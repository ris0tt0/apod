import React, { FC } from 'react';
import { APODParams } from '.';
import { useParams } from 'react-router-dom';
import { Apod } from '../components/apod';

export const ApodRoute: FC = () => {
  const { date } = useParams<APODParams>();
  if (!date) {
    return null;
  }
  return <Apod date={date} />;
};
