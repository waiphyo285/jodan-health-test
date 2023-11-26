export const appInfo = {
  VERSION: '1.0',
  NAME: 'Full Stack Template',
  DESCRIPTION: 'A demo application using Nest.js x Next.js'
};

export const yupMessage = {
  DEFAULT: 'This is a required field',
  INVALID: 'This should be a valid field',
  INVALID_ID: 'This should be a valid ID type'
};

export const queryType = {
  GET_ONE: 'getOne',
  GET_LIST: 'getList',
  PAGINATION: 'pagination'
};

export const requestMethod = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

export const buttonType = {
  CANCEL: 'cancel',
  PERMIT: 'permit'
};

export const actionType = {
  NEW: 'new',
  EDIT: 'edit',
  DELETE: 'delete',
  CONFIRM: 'confirm'
};

export const columnType = {
  CHIP: 'chip',
  ARRAY: 'array',
  STRING: 'string',
  SELECT: 'select',
  DATETIME: 'dateTime'
};

export const formikType = {
  STRING: 'string',
  NUMBER: 'number',
  TABLE_ID: 'relationId'
};

export const fieldType = {
  FILE: 'file',
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  SELECT: 'select',
  RADIOBOX: 'radiobox',
  CHECKBOX: 'checkbox',
  DATE: 'date',
  TIME: 'time',
  SWITCH: 'switch',
  RICHTEXT: 'richtext'
};

export const submitText = {
  // modal
  NO: 'No',
  YES: 'Yes',
  // common
  SAVE: 'Save',
  CLOSE: 'Close',
  CREATE: 'Create',
  UPDATE: 'Update',
  CANCEL: 'Cancel',
  // auth
  LOG_IN: 'Sign In',
  REGISTER: 'Sign Up'
};

export const alertMessage = {
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
};

export const dataTable = {
  ROW_COUNT_0: 0,
  PAGE_SIZE_0: 0,
  PAGE_SIZE_10: 10,
  PAGE_SIZE_25: 25,
  PAGE_SIZE_100: 100,
  PAGE_MODE: 'server'
};

export const chipText = {
  STATUS_0: 'Inactive',
  STATUS_1: 'Active'
};

export const dtFormat = {
  TIME_0: 'hh:mm A',
  TIME_1: 'hh:mm:ss A',
  TIME_2: 'HH:mm:ss',
  DATE_0: 'DD/MM/YYYY',
  DATETIME_0: 'DD/MM/YYYY hh:mm A'
};

export const rteFormats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent'
];

export const rteModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { indent: '-1' },
      { indent: '+1' },
      { list: 'bullet' },
      { list: 'ordered' }
    ],
    ['clean']
  ]
};

export const noticeMessage = {
  DELETE_CONFIRM:
    'Are you sure you want to delete this record? This action cannot be undone.',
  EXPIRED_SESSION:
    'Your login session has ended. To continue using our services, please log in again.'
};

export const validateMessage = {
  PTN_USERNAME:
    'This field must only contain letters, numbers, and underscores',
  PTN_PASSWORD:
    'This field must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
};
