import { store } from '@/redux/store';
import { updateStackBar } from '@/redux/alert.slice';
import { httpStatus } from './constants/httpStatus';
import { alertMessage } from './constants/application';
import { resetFormData, updateActionsValues } from '@/redux/entry/common.slice';

export function appErrorHandler(error: typeof Error) {
  const { code, name, message }: any = error;

  store?.dispatch(
    updateStackBar({
      showAlert: true,
      statusCode: code,
      severity: alertMessage.ERROR,
      description: `${name}: ${message}`
    })
  );
}

export function asyncErrorWrapper(
  fn: Function,
  errorHandler: Function = appErrorHandler
) {
  return async function (...args: any) {
    try {
      return await fn.apply(this, args);
    } catch (error: any) {
      errorHandler(error);
    }
  };
}

export function responseHandler({ statusCode, message }) {
  switch (statusCode) {
    case httpStatus.OK:
    case httpStatus.CREATED:
      store?.dispatch(
        updateStackBar({
          showAlert: true,
          severity: alertMessage.SUCCESS,
          statusCode: statusCode,
          description: message
        })
      );
      break;

    default:
      break;
  }
}

export function handleToggleModal(updatedValues: any) {
  switch (true) {
    case updatedValues?.openEntryModal:
    case updatedValues?.openConfirmAlert:
      store?.dispatch(updateActionsValues(updatedValues));
      break;

    case !updatedValues?.openEntryModal:
    case !updatedValues?.openConfirmAlert:
      store?.dispatch(resetFormData());
      break;

    default:
      break;
  }
}
