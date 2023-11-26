import { userPageValues } from '../PageValues';
import { userModalValues } from '../ModalValues';
import { userInitialValues } from '../InitialValues';
import { userFormFields } from '../FormFields';
import { userTableColumns } from '../TableColumns';
import { userSearchOptions } from '../TableSearchOptions';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newUserFactory } from '@/models/User';
import { storeKeys } from '@/utilities/constants/storeKeys';

const userValues = new CommonComponent(
  storeKeys.USER,
  userPageValues,
  userModalValues,
  userInitialValues,
  userFormFields,
  userTableColumns,
  userSearchOptions,
  newUserFactory
);

export default userValues;
