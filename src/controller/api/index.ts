import axios, { type AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://science.nasa.gov/wp-json/wp/v2/apod-basic',
  timeout: 5000,
});

export const getBasic = async (date: string): Promise<AxiosResponse> => {
  const response = await api.get(`/${date}`);
  return response;
};
