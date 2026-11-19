import Logger from 'js-logger';
import { ApodIDB, type ApodItem } from '../db';
import { getBasic } from './api';
import { getApiDateString } from '../utils';

export const getJSONForDate = async (date: string) => {
  Logger.info('getJSONforDate 1');
  const db = await ApodIDB.getInstance();
  Logger.info('getJSONforDate 2');
  const dateData = await db.getData([date]);
  Logger.info('getJSONforDate 3');

  if (dateData && dateData.length === 1 && dateData[0] !== null) {
    Logger.info('getJSONforDate 4');
    return dateData[0] as ApodItem;
  } else {
    const apiString = getApiDateString(date);
    Logger.info('getJSONforDate 5', apiString);
    if (apiString !== null) {
      const result = await getBasic(apiString);

      await db.setData([result.data]);

      return result.data as ApodItem;
    }

    Logger.warn('getJSONForDate unknown result');

    return null;
  }
};
