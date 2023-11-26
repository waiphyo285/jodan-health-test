import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { AES256 } from './Crypto';
import { getAuthorization } from '@/utilities/Getters';
import { responseHandler } from '@/utilities/Handlers';
import { aesConstants } from '@/utilities/constants/credentials';
import { requestMethod } from '@/utilities/constants/application';

const onRequestOk = (config: AxiosRequestConfig): AxiosRequestConfig | any => {
  // don't remove this output meanwhile development!
  console.info('🛫 Intercept request ', config);

  const headers = getAuthorization();
  config.headers = { ...config.headers, ...headers };

  if (config.data instanceof FormData) {
    return config;
  }

  if (aesConstants.isEncrypted && config.data) {
    config.data = {
      ytsurt: true,
      edocne: AES256.encryption(config.data)
    };
  }

  return config;
};

const onResponseOk = (response: AxiosResponse): AxiosResponse => {
  if (aesConstants.isEncrypted && response?.data) {
    response.data = AES256.decryption(response?.data?.result);
  }

  const { statusCode, message, method } = response?.data;

  if (method !== requestMethod.GET) responseHandler({ statusCode, message });

  // don't remove this output meanwhile development!
  console.info('🛬 Intercept response ', response?.data);

  return response?.data;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // don't remove this output meanwhile development!
  console.error('🍒 Intercept request error ', error);

  return Promise.reject(error);
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // don't remove this output meanwhile development!
  console.error('🍒 Intercept response error ', error);

  return Promise.reject(error);
};

export const createAxiosInstance = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequestOk, onRequestError);
  axiosInstance.interceptors.response.use(onResponseOk, onResponseError);
  return axiosInstance;
};
