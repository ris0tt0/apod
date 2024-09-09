import { ApodItem } from '../db';

export interface Commands {
  isInit: boolean;
  init(): Promise<boolean>;
  requestDay(date: string): Promise<ApodItem>;
}
