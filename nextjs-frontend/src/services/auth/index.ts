// import { localServer as http } from '../api';
import { apiServer as http } from '../api';

const userLogin = (url: any, data: any) => {
  return http.post(url, data);
};

const guardLogin = (url: any, data: any) => {
  return http.post(url, data);
};

const AuthService = {
  userLogin,
  guardLogin
};

export default AuthService;
