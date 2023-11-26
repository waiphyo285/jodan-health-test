import axios, { AxiosRequestConfig } from 'axios';
import { createAxiosInstance } from './Interceptor';
import { asyncErrorWrapper } from '@/utilities/Handlers';

export function getAxiosInstance(configurations?: AxiosRequestConfig) {
  const axiosInstance = axios.create(configurations);
  createAxiosInstance(axiosInstance);

  return {
    axios: axiosInstance,

    get: asyncErrorWrapper(async (endpoint: string, options = {}) => {
      return await axiosInstance.get(endpoint, options);
    }),

    post: asyncErrorWrapper(
      async (endpoint: string, data = {}, options = {}) => {
        return await axiosInstance.post(endpoint, data, options);
      }
    ),

    put: asyncErrorWrapper(
      async (endpoint: string, data = {}, options = {}) => {
        return await axiosInstance.put(endpoint, data, options);
      }
    ),

    patch: asyncErrorWrapper(
      async (endpoint: string, data = {}, options = {}) => {
        return await axiosInstance.patch(endpoint, data, options);
      }
    ),

    delete: asyncErrorWrapper(async (endpoint: string, options = {}) => {
      return await axiosInstance.delete(endpoint, options);
    })
  };
}
