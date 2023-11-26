import axios from 'axios';
import { requestMethod } from '@/utilities/constants/application';


export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb'
    }
  }
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const getParamPath = (query: any) => {
  const path = query.slug.join('/');
  delete query.slug;
  const params = new URLSearchParams(query).toString();
  return { path, params };
};

const proxyApi = async (req: any, res: any) => {
  const { path, params } = getParamPath(req.query);

  const urlPath = `${process.env.API_URL}/${path}`;

  axios.defaults.headers.common['authorization'] = req.headers.authorization;

  try {
    let response: any;

    switch (req.method) {
      case requestMethod.POST:
        response = await axios.post(urlPath, req.body);
        break;
      case requestMethod.DELETE:
        response = await axios.delete(`${urlPath}${params}`);
        break;
      case requestMethod.PUT:
        response = await axios.put(urlPath, req.body);
        break;
      case requestMethod.PATCH:
        response = await axios.patch(urlPath, req.body);
        break;
      default:
        response = await axios.get(`${urlPath}${params ? `?${params}` : ''}`);
        break;
    }

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error?.response?.status).json(error?.response?.data);
  }
};

export default proxyApi;
