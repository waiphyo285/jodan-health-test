import { newLoginFactory } from '@/models/Auth';
import { storeKeys } from '@/utilities/constants/storeKeys';
import { authLoginInitialValues } from '../InitialValues';
import { AuthComponent } from '../prototypes/AuthInstance';
import { authLoginPageValues, authUserAlertValues } from '../PageValues';

const authValues = new AuthComponent(
  storeKeys.AUTH,
  authLoginPageValues,
  authUserAlertValues,
  authLoginInitialValues,
  newLoginFactory
);

export default authValues;
