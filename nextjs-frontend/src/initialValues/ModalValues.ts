import {
  actionType,
  submitText,
  noticeMessage
} from '@/utilities/constants/application';

export const initModalValues: any = [
  {
    key: actionType.NEW,
    value: {
      title: 'New record',
      minHeight: 300,
      saveText: submitText.SAVE,
      cancelText: submitText.CANCEL
    }
  },
  {
    key: actionType.EDIT,
    value: {
      title: 'Edit record',
      minHeight: 300,
      updateText: submitText.UPDATE,
      cancelText: submitText.CANCEL
    }
  },
  {
    key: actionType.CONFIRM,
    value: {
      title: 'Confirmation',
      message: noticeMessage.DELETE_CONFIRM,
      confirmText: submitText.YES,
      cancelText: submitText.NO
    }
  }
];

export const userModalValues = initModalValues;
export const userRoleModalValues = initModalValues;

export const regionModalValues = initModalValues;
export const townshipModalValues = initModalValues;
