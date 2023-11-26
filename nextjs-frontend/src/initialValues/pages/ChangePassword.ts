import { changePasswordPageValues } from '../PageValues';
import { changePasswordFormFields } from '../FormFields';
import { changePasswordInitialValues } from '../InitialValues';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newChangePasswordFactory } from '@/models/ChangePassword';
import { storeKeys } from '@/utilities/constants/storeKeys';

const emptyOrVoidArrayValues = [];

const changePasswordValues = new CommonComponent(
  storeKeys.USER,
  changePasswordPageValues,
  emptyOrVoidArrayValues,
  changePasswordInitialValues,
  changePasswordFormFields,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  newChangePasswordFactory
);

export default changePasswordValues;
