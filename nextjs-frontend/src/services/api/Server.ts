import { getAxiosInstance } from './Instance';

export const apiServer = getAxiosInstance({
  baseURL: '/api/proxy'
});

// https://apipheny.io/free-api/#apis-without-key
// http://universities.hipolabs.com/search?country=Myanmar
