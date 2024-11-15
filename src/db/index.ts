/**
 * Database, where we store the apod data.
 */

export interface ApodDB {
  init(): Promise<boolean>;
  /**
   * returns data based on id
   * @param id value to request
   */
  getData(ids: string[]): Promise<ApodItem[]>;
  setData(datas: ApodItem[]): Promise<void>;
}

export type ApodItem = {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
