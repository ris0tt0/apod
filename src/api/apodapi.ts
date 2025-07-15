import Logger from 'js-logger';
import { ApodApi, RangeParams } from '.';
import axios, { AxiosInstance } from 'axios';

const api_key = process.env.BART_API_KEY ?? 'DEMO_KEY';

const config = {
  baseURL: 'https://api.nasa.gov/planetary',
  params: { api_key },
};

export class ApodApiImpl implements ApodApi {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create(config);
  }
  init() {
    const retVal = Promise.resolve(true);
    return retVal;
  }

  getDate = async (date: string) => {
    const request = this.axios.get(`/apod`, { params: { date } });
    return request;
  };

  getRange = async ({ startDate, endDate }: RangeParams) => {
    Logger.info('ApodApiImpl::getRange', startDate, endDate);
  };

  getRandomCount = async (total: number) => {
    Logger.info('ApodApiImpl::init');
  };
}
