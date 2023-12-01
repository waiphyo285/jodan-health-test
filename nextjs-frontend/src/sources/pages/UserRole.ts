import { userRolePageValues } from '../PageValues';
import { userRoleModalValues } from '../ModalValues';
import { userRoleInitialValues } from '../InitialValues';
import { userRoleFormFields } from '../FormFields';
import { userRoleTableColumns } from '../TableColumns';
import { userRoleSearchOptions } from '../TableSearchOptions';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newUserRoleFactory } from '@/models/UserRole';
import { storeKeys } from '@/utilities/constants/storeKeys';

const userRoleValues = new CommonComponent(
  storeKeys.USER_ROLE,
  userRolePageValues,
  userRoleModalValues,
  userRoleInitialValues,
  userRoleFormFields,
  userRoleTableColumns,
  userRoleSearchOptions,
  newUserRoleFactory
);

export default userRoleValues;
