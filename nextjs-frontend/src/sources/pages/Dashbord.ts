import { dashboardPageValues } from '../PageValues';
import { newUnknownFactory } from '@/models/Unknown';
import { CommonComponent } from '../prototypes/CommonInstance';

const undefinedStore = '';
const emptyOrVoidArrayValues = [];

const dashboardValues = new CommonComponent(
  undefinedStore,
  dashboardPageValues,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  emptyOrVoidArrayValues,
  newUnknownFactory
);

export default dashboardValues;
