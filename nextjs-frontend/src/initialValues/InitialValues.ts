import { formikType, validateMessage } from '@/utilities/constants/application';

export const authLoginInitialValues = [
  {
    key: 'username',
    type: formikType.STRING,
    value: '',
    required: true,
    pattern: /^[a-zA-Z0-9_]+$/,
    patternMessage: validateMessage.PTN_USERNAME,
    min: 6,
    max: 16
  },
  {
    key: 'password',
    type: formikType.STRING,
    value: '',
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
    patternMessage: validateMessage.PTN_PASSWORD,
    required: true,
    min: 6,
    max: 16
  }
];

export const userInitialValues = [
  {
    key: 'fullname',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'phone',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'username',
    type: formikType.STRING,
    value: '',
    required: true,
    pattern: /^[a-zA-Z0-9_]+$/,
    patternMessage: validateMessage.PTN_USERNAME,
    min: 6,
    max: 16
  },
  {
    key: 'password',
    type: formikType.STRING,
    value: '',
    disableEdited: true,
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
    patternMessage: validateMessage.PTN_PASSWORD,
    min: 6,
    max: 16
  },
  {
    key: 're_password',
    type: formikType.STRING,
    value: '',
    disableEdited: true,
    required: true,
    matchWith: 'password',
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
    patternMessage: validateMessage.PTN_PASSWORD,
    max: 16
  },
  {
    key: 'description',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'user_role_id',
    type: formikType.TABLE_ID,
    value: '',
    required: true
  }
];

export const editUserInitialValues = [
  {
    key: 'name',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'phone',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'address',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'profile',
    type: formikType.STRING,
    value: '',
    required: false
  }
];

export const changePasswordInitialValues = [
  {
    key: 'username',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'password',
    type: formikType.STRING,
    value: '',
    required: true,
    min: 6,
    max: 16
  },
  {
    key: 'new_password',
    type: formikType.STRING,
    value: '',
    required: true,
    min: 6,
    max: 16
  },
  {
    key: 'confirm_password',
    type: formikType.STRING,
    value: '',
    required: true,
    matchWith: 'new_password',
    min: 6,
    max: 16
  }
];

export const userRoleInitialValues = [
  {
    key: 'id',
    type: formikType.STRING,
    value: '',
    required: false
  },
  {
    key: 'name',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'level',
    type: formikType.NUMBER,
    value: undefined,
    required: true
  },
  {
    key: 'active',
    type: formikType.NUMBER,
    value: 1,
    required: false
  }
];

export const profileInitialValues = [
  {
    key: 'id',
    type: formikType.STRING,
    value: '',
    required: false
  },
  {
    key: 'name',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'phone',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'address',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'profile',
    type: formikType.STRING,
    value: '',
    required: true
  }
];

export const regionInitialValues = [
  {
    key: 'id',
    type: formikType.STRING,
    value: '',
    required: false
  },
  {
    key: 'name',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'name_mm',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'active',
    type: formikType.NUMBER,
    value: 1,
    required: false
  }
];

export const townshipInitialValues = [
  {
    key: 'id',
    type: formikType.STRING,
    value: '',
    required: false
  },
  {
    key: 'name',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'name_mm',
    type: formikType.STRING,
    value: '',
    required: true
  },
  {
    key: 'region_id',
    type: formikType.TABLE_ID,
    value: '',
    required: true
  },
  {
    key: 'active',
    type: formikType.NUMBER,
    value: 1,
    required: false
  }
];
