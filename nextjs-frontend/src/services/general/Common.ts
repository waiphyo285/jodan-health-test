import { localServer as http } from '../api';
// import { apiServer as http } from '../api';
import { queryType } from '@/utilities/constants/application';
import { QueryAdapter, RequestAdapter, ResponseAdapter } from '../Adapter';

const getList = async (url: string, storeKey: string) => {
  const res = await http.get(url);

  const result = {
    resData: res.data,
    options: { apiName: storeKey }
  };

  const responseAdapter = new ResponseAdapter(result);

  return responseAdapter.createResponse();
};

const getListByFilter = async (url: string, _query: any, storeKey: string) => {
  const res = await http.get(url);

  const result = {
    resData: res.data,
    options: { apiName: storeKey }
  };

  const responseAdapter = new ResponseAdapter(result);

  return responseAdapter.createResponse();
};

const getListByPage = async (url: string, pageInfo: any, storeKey: string) => {
  const query = {
    query: pageInfo,
    options: { type: queryType.PAGINATION }
  };

  const queryAdapter = new QueryAdapter(query);

  const res = await http.get(url, { params: queryAdapter.createQuery() });

  const result = {
    resData: res.data,
    options: { apiName: storeKey, type: queryType.PAGINATION }
  };

  const responseAdapter = new ResponseAdapter(result);

  return responseAdapter.createPageResponse();
};

const getOneById = async (
  url: string,
  id: string | number,
  storeKey: string
) => {
  const res = await http.get(`${url}${id}`);

  const result = {
    resData: res.data,
    options: { url, apiName: storeKey }
  };

  const responseAdapter = new ResponseAdapter(result);

  return responseAdapter.createResponse();
};

const createOne = async (url: string, data: any, storeKey: string) => {
  const request = {
    reqData: data,
    options: { url, apiName: storeKey }
  };

  const requestAdapter = new RequestAdapter(request);

  const res = await http.post(url, requestAdapter.createRequest());

  return res.data;
};

const updateById = async (
  url: string,
  id: string | number,
  data: any,
  storeKey: string
) => {
  const request = {
    reqData: data,
    options: { url, apiName: storeKey }
  };

  const requestAdapter = new RequestAdapter(request);

  const res = await http.patch(`${url}${id}`, requestAdapter.createRequest());

  return res.data;
};

const deleteById = async (url: string, id: string | number, _storeKey) => {
  const res = await http.delete(`${url}${id}`);

  return res;
};

const CommonService = {
  getList,
  getListByFilter,
  getListByPage,
  getOneById,
  createOne,
  updateById,
  deleteById
};

export default CommonService;
