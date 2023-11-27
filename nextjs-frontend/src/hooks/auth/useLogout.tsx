import Cookies from 'js-cookie';
import { store } from '@/redux/store';
import { resetAuthState } from '@/redux/auth.slice';
import ls from '@/services/LocalStorage';

export const useLogout = () => {
  const logout = () => {
    ls.clearAll();
    Cookies.remove('currentUser');
    store && store?.dispatch(resetAuthState());
  };
  return { logout };
};
