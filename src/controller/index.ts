import Logger from 'js-logger';
import { ApodIDB } from '../db';
import { getBasic } from './api';
import { getApiDateString } from '../utils';

export const getJSONForDate = async (date: string) => {
  const db = await ApodIDB.getInstance();

  const dateData = await db.getData([date]);

  if (dateData.length === 1 && dateData[0] !== null) {
    return dateData[0];
  } else {
    const apiString = getApiDateString(date);
    if (apiString !== null) {
      const result = await getBasic(apiString);

      await db.setData([result.data]);

      return result.data;
    }

    Logger.warn('getJSONForDate unknown result');

    return null;
  }
};
