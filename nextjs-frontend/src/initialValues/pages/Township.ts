import { townshipPageValues } from '../PageValues';
import { townshipModalValues } from '../ModalValues';
import { townshipInitialValues } from '../InitialValues';
import { townshipFormFields } from '../FormFields';
import { townshipTableColumns } from '../TableColumns';
import { townshipSearchOptions } from '../TableSearchOptions';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newTownshipFactory } from '@/models/Township';
import { storeKeys } from '@/utilities/constants/storeKeys';

const townshipValues = new CommonComponent(
  storeKeys.TOWNSHIP,
  townshipPageValues,
  townshipModalValues,
  townshipInitialValues,
  townshipFormFields,
  townshipTableColumns,
  townshipSearchOptions,
  newTownshipFactory
);

export default townshipValues;
