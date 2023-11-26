import { profilePageValues } from '../PageValues';
import { userInitialValues } from '../InitialValues';
import { CommonComponent } from '../prototypes/CommonInstance';
import { storeKeys } from '@/utilities/constants/storeKeys';
import { newUnknownFactory } from '@/models/Unknown';

const emptyOrVoidArrayValues = [];

const profileValues = new CommonComponent(
  storeKeys.USER,
  profilePageValues,
  emptyOrVoidArrayValues,
  userInitialValues,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  newUnknownFactory
);

export default profileValues;
