import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useAuthentication = () => {
  const router = useRouter();

  useEffect(() => {
    const currentUser = Cookies.get('currentUser');
    if (!currentUser && router.pathname !== '/') router.push('/');
  }, [router]);

  return null;
};

export default useAuthentication;
