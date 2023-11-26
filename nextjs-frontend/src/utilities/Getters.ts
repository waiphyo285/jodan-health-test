import Cookies from 'js-cookie';

export function getCurrentUser() {
  const currentUser = Cookies.get('currentUser');

  if (currentUser && currentUser !== 'undefined')
    return JSON.parse(currentUser || '{}')?.userInfo;

  return {};
}

export function getAuthorization() {
  const currentUser = Cookies.get('currentUser');

  if (currentUser && currentUser !== 'undefined')
    return {
      Authorization: `Bearer ${
        JSON.parse(currentUser || '')?.accessToken || ''
      }`
    };

  return {};
}

export function getGuardUser() {
  const isGuardUser = Cookies.get('isGuardUser');

  return isGuardUser === 'yes';
}
