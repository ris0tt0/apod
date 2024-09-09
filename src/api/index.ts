export type RangeParams = {
  startDate: string;
  endDate: string;
};
/**
 * Responsible for requesting apod data.
 */
export interface ApodApi {
  init(): Promise<boolean>;
  getDate(date: string): Promise<any>;
  getRange({ startDate, endDate }: RangeParams): Promise<any>;
  getRandomCount(total: number): Promise<any>;
}
