import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
// import AuthService from '@/services/auth';

export const useCurrentUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = Cookies.get('currentUser');
    if (currentUser) setUser(JSON.parse(currentUser));
  }, []);

  return { user };

  //   const refetchUser = async (userId: string) => {
  //     const getUserInfo = await authService.getUserById(userId);
  //     const currentUser = Cookies.get('currentUser');
  //     if (getUserInfo && currentUser) {
  //       const newUser = {
  //         ...JSON.parse(currentUser),
  //         ...getUserInfo
  //       };
  //       setUser(newUser);
  //       Cookies.set('currentUser', JSON.stringify(newUser));
  //     }
  //   };

  // return { user, refetchUser };
};
