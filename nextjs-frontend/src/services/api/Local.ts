import { getAxiosInstance } from './Instance';

export const localServer = getAxiosInstance({
  baseURL: '/api/proxy'
});
