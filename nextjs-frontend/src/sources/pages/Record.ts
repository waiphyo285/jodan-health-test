import { recordPageValues } from '../PageValues';
import { recordModalValues } from '../ModalValues';
import { recordInitialValues } from '../InitialValues';
import { townshipFormFields } from '../FormFields';
import { townshipTableColumns } from '../TableColumns';
import { recordSearchOptions } from '../TableSearchOptions';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newTownshipFactory } from '@/models/Township';
import { storeKeys } from '@/utilities/constants/storeKeys';

const recordValues = new CommonComponent(
  storeKeys.RECORD,
  recordPageValues,
  recordModalValues,
  recordInitialValues,
  townshipFormFields,
  townshipTableColumns,
  recordSearchOptions,
  newTownshipFactory
);

export default recordValues;
