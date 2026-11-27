import { ApodIDB, type ApodItem } from '../db';
import { getApiDateString } from '../utils';
import { getBasic } from './api';

export const getJSONForDate = async (date: string) => {
  const db = await ApodIDB.getInstance();
  const dateData = await db.getData([date]);

  if (dateData && dateData.length === 1 && dateData[0] !== null) {
    return dateData[0] as ApodItem;
  } else {
    const apiString = getApiDateString(date);
    if (apiString !== null) {
      const result = await getBasic(apiString);

      await db.setData([result.data]);

      return result.data as ApodItem;
    }

    return null;
  }
};
