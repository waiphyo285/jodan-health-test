import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url: string) {
    const publicPaths = ['/'];
    const currentPath = url.split('?')[0];

    const isGuardUser = Cookies.get('isGuardUser');
    const currentUser = JSON.parse(Cookies.get('currentUser') || '{}');
    const currentTime = Math.floor(Date.now() / 1000);

    const issuedAt = currentUser?.issuedAt;
    const expiresIn = currentUser?.expiresIn;
    const accessToken = currentUser?.accessToken;

    const forceLogout =
      (!accessToken && !publicPaths.includes(currentPath)) ||
      (accessToken && currentTime >= issuedAt + expiresIn);

    if (forceLogout || isGuardUser === 'yes') {
      Cookies.remove('isGuardUser');
      Cookies.remove('currentUser');
      setAuthorized(false);
      router.push({
        pathname: '/',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}

export { RouteGuard };
