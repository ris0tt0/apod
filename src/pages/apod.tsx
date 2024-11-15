import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatFeedDateString, getCurentFormattedDate } from './utils';
import Logger from 'js-logger';
import Apod from '../components/apod';

type APODParams = {
  date: string | undefined;
};

const AstronomyPictureOfTtheDayPage: FC = () => {
  const { date } = useParams<APODParams>();
  const navigate = useNavigate();

  useEffect(() => {
    const result = formatFeedDateString(date);

    if (result === null) {
      const currentDate = getCurentFormattedDate();
      Logger.info('👍🏾nave', currentDate);
      navigate(`/${currentDate}`, { replace: true });
    } else {
      Logger.info('👍🏾nave 2', date);
      navigate(`/${date}`);
    }
  }, [date]);

  if (!date) {
    return null;
  }

  return <Apod date={date} />;
};

export { AstronomyPictureOfTtheDayPage };
