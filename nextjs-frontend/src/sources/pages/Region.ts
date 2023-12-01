import { regionPageValues } from '../PageValues';
import { regionModalValues } from '../ModalValues';
import { regionInitialValues } from '../InitialValues';
import { regionFormFields } from '../FormFields';
import { regionTableColumns } from '../TableColumns';
import { regionSearchOptions } from '../TableSearchOptions';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newRegionFactory } from '@/models/Region';
import { storeKeys } from '@/utilities/constants/storeKeys';

const regionValues = new CommonComponent(
  storeKeys.REGION,
  regionPageValues,
  regionModalValues,
  regionInitialValues,
  regionFormFields,
  regionTableColumns,
  regionSearchOptions,
  newRegionFactory
);

export default regionValues;
