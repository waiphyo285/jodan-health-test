import { editUserPageValues } from '../PageValues';
import { editUserFormFields } from '../FormFields';
import { editUserInitialValues } from '../InitialValues';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newEditUserFactory } from '@/models/EditUser';
import { storeKeys } from '@/utilities/constants/storeKeys';

const emptyOrVoidArrayValues = [];

const editUserValues = new CommonComponent(
  storeKeys.USER,
  editUserPageValues,
  emptyOrVoidArrayValues,
  editUserInitialValues,
  editUserFormFields,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  newEditUserFactory
);

export default editUserValues;
