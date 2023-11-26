import Cookies from 'js-cookie';
import AuthService from '@/services/auth';
import { store } from '@/redux/store';
import { getListFilter } from '@/redux/config.slice';
import { storeKeys } from '@/utilities/constants/storeKeys';

const NOT_FOUND = 'Credential not found';

export const useLogin = () => {
  const login = async (url: string, data: any) => {
    const user = await AuthService.userLogin(url, data);

    if (user?.data === NOT_FOUND) return null;

    if (user) {
      let roleId = user.data.userInfo.role_id;

      store?.dispatch(
        getListFilter({
          url: storeKeys.PAGE_LEVEL_ACCESSES,
          query: { role_id: roleId },
          storeKey: storeKeys.PAGE_LEVEL_ACCESSES
        })
      );

      store?.dispatch(
        getListFilter({
          url: storeKeys.APP_LEVEL_ACCESSES,
          query: { role_id: roleId },
          storeKey: storeKeys.APP_LEVEL_ACCESSES
        })
      );

      Cookies.set('currentUser', JSON.stringify(user?.data));
    }
    return user?.data;
  };

  const guardLogin = async (url: string, data: any) => {
    const guardUser = await AuthService.guardLogin(url, data);
    if (guardUser?.data === NOT_FOUND) return null;
    Cookies.set('isGuardUser', 'yes');
    Cookies.set('currentUser', JSON.stringify(guardUser?.data));
    return guardUser?.data;
  };

  return { login, guardLogin };
};
