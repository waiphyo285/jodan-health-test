import { languagePageValues } from '../PageValues';
import { languageModalValues } from '../ModalValues';
import { languageInitialValues } from '../InitialValues';
import { languageFormFields } from '../FormFields';
import { regionTableColumns } from '../TableColumns';
import { languageSearchOptions } from '../TableSearchOptions';
import { CommonComponent } from '../prototypes/CommonInstance';
import { newRegionFactory } from '@/models/Region';
import { storeKeys } from '@/utilities/constants/storeKeys';

const languageValues = new CommonComponent(
  storeKeys.LANGUAGE,
  languagePageValues,
  languageModalValues,
  languageInitialValues,
  languageFormFields,
  regionTableColumns,
  languageSearchOptions,
  newRegionFactory
);

export default languageValues;
