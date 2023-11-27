import Cookies from 'js-cookie';
import AuthService from '@/services/auth';
import { store } from '@/redux/store';
import { getListFilter } from '@/redux/config.slice';
import { storeKeys } from '@/utilities/constants/storeKeys';

const YES = 'yes';
const NOT_FOUND = 'Credential not found';

export const useLogin = () => {
  const login = async (url: string, data: any) => {
    const user = await AuthService.userLogin(url, data);

    if (user?.data === NOT_FOUND) return null;

    if (user) {
      const roleId = user.data.userInfo.role_id;

      const { PERMISSION, APP_LEVEL_ACCESS, PAGE_LEVEL_ACCESS } = storeKeys;

      store?.dispatch(
        getListFilter({
          url: `${PERMISSION}/${PAGE_LEVEL_ACCESS}`,
          query: { role_id: roleId },
          storeKey: PAGE_LEVEL_ACCESS
        })
      );

      store?.dispatch(
        getListFilter({
          url: `${PERMISSION}/${APP_LEVEL_ACCESS}`,
          query: { role_id: roleId },
          storeKey: APP_LEVEL_ACCESS
        })
      );

      Cookies.set('currentUser', JSON.stringify(user?.data));
    }
    return user?.data;
  };

  const guardLogin = async (url: string, data: any) => {
    const guardUser = await AuthService.guardLogin(url, data);

    if (guardUser?.data === NOT_FOUND) return null;

    const dataStr = JSON.stringify(guardUser?.data);

    Cookies.set('isGuardUser', YES);
    Cookies.set('currentUser', dataStr);

    return guardUser?.data;
  };

  return { login, guardLogin };
};
