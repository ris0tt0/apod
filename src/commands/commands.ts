import Logger from 'js-logger';
import { Commands } from '.';
import { ApodApi } from '../api';
import { ApodDB, ApodItem } from '../db';
import { formatFeedDateString, getCurentFormattedDate } from '../utils';

export type CommandsImplParams = {
  api: ApodApi;
  db: ApodDB;
};

class CommandsImpl implements Commands {
  api: ApodApi;
  db: ApodDB;

  isInit: boolean = false;

  constructor({ api, db }: CommandsImplParams) {
    this.api = api;
    this.db = db;
  }

  init = async () => {
    this.isInit = false;
    await this.api.init();
    await this.db.init();

    this.isInit = true;
    return true;
  };

  requestDay = async (date: string) => {
    const [data] = await this.db.getData([date]);

    if (data) return data;

    if (data === null) {
      const valid = formatFeedDateString(date);
      if (valid === null) {
        const current = getCurentFormattedDate();

        const retVal = await this.requestGetDay(current);
        return retVal;
      }
    }

    const retVal = await this.requestGetDay(date);
    return retVal;
  };

  private requestGetDay(date: string) {
    const retVal = new Promise<ApodItem>((resolve, reject) => {
      this.api
        .getDate(date)
        .then((result) => {
          this.db.setData([result.data]);
          resolve(result.data);
        })
        .catch((e) => {
          Logger.info('👍🏾commands::requestGetDay', e);
          reject(e);
        });
    });

    return retVal;
  }
}

export default CommandsImpl;
