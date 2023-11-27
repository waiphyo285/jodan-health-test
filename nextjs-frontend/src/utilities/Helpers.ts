import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import ls from '@/services/LocalStorage';
import { storeKeys } from '@/utilities/constants/storeKeys';

// Check if a variable is an object (excluding arrays)
export function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// Check if a variable is an array
export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

// Check if an object is empty (has no own properties)
export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

// Check if an array is empty
export function isEmptyArray(arr: any[]): boolean {
  return arr.length === 0;
}

// Check is string or number
export function isStringOrNumber(value: any): boolean {
  return (
    typeof value === 'number' ||
    (typeof value === 'string' && value.trim() !== '')
  );
}

export function readFileAsDataURL(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
}

export async function dataURLtoBlob(dataURL: string) {
  const parts = dataURL.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const byteCharacters = atob(parts[1]);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
}

export function findLabelByValue(options: any[], value: any) {
  return options.find((option) => option.value === value)?.label;
}

export function findAccessHeaderItem(accessModule: any) {
  const storeAppLevelAccess: any = useSelector(
    (state: AppState) => state?.appConfig?.['get-app-access']
  );
  const appLevelAccess = ls.getItem(storeKeys.APP_LEVEL_ACCESS);

  const accessAppMenu = appLevelAccess || storeAppLevelAccess;

  if (accessAppMenu) {
    return accessAppMenu.find((permission: any) => permission[accessModule]);
  }
}

export function findAccessMenu(accessModule: any, currentPath: string) {
  return true;

  const storePageLevelAccess: any = useSelector(
    (state: AppState) => state?.appConfig?.['get-page-access']
  );

  const pageLevelAccess = ls.getItem(storeKeys.PAGE_LEVEL_ACCESS);

  const accessPageMenu = pageLevelAccess || storePageLevelAccess;

  if (accessPageMenu && currentPath) {
    return accessPageMenu.find(
      (permission: any) =>
        currentPath.includes(permission.module) && permission[accessModule]
    );
  }
}

export function filterSubMenu(AppMenuList: any) {
  return AppMenuList;

  const storePageLevelAccess: any = useSelector(
    (state: AppState) => state?.appConfig?.['get-page-access']
  );

  const pageLevelAccess = ls.getItem(storeKeys.PAGE_LEVEL_ACCESS);

  const accessPageMenu = pageLevelAccess || storePageLevelAccess;

  const filteredSubMenu = AppMenuList.map((menuItem: any) => {
    const subMenu = menuItem.subMenu || [];

    const filteredSubItems = subMenu.filter((subMenuItem: any) => {
      return accessPageMenu.some(
        (menuItem: any) =>
          menuItem.module === subMenuItem.link && menuItem.can_access_menu === 1
      );
    });

    if (filteredSubItems.length > 0) {
      return { ...menuItem, subMenu: filteredSubItems };
    }

    return null;
  }).filter(Boolean);

  return filteredSubMenu;
}
