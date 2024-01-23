import {
  appInfo,
  noticeMessage,
  submitText
} from '@/utilities/constants/application';

// Admin panel app

export const initPageValues: any = [
  {
    key: 'subtitle',
    value: 'these are your created records.'
  },
  {
    key: 'createText',
    value: submitText.CREATE
  }
];

export const authUserAlertValues = [
  {
    key: 'logoutMessage',
    value: noticeMessage.EXPIRED_SESSION
  }
];

export const authLoginPageValues = [
  {
    key: 'head',
    value: 'Login'
  },
  {
    key: 'title',
    value: 'Login Your Account'
  },
  {
    key: 'subtitle',
    value: appInfo.DESCRIPTION
  },
  {
    key: 'loginText',
    value: submitText.LOG_IN
  }
];

export const dashboardPageValues = [
  {
    key: 'head',
    value: 'Overview'
  },
  {
    key: 'title',
    value: 'Dashboard'
  },
  {
    key: 'subtitle',
    value: 'Welcome back'
  }
];

export const userPageValues = [
  ...initPageValues,
  {
    key: 'head',
    value: 'Account'
  },
  {
    key: 'title',
    value: 'Users'
  }
];

export const profilePageValues = [
  {
    key: 'head',
    value: 'Account'
  },
  {
    key: 'title',
    value: 'User Profile'
  },
  {
    key: 'subtitle',
    value: ''
  }
];

export const editUserPageValues = [
  {
    key: 'head',
    value: 'Account'
  },
  {
    key: 'title',
    value: 'Edit Information'
  },
  {
    key: 'subtitle',
    value: ''
  },
  {
    key: 'saveText',
    value: submitText.SAVE
  }
];

export const changePasswordPageValues = [
  {
    key: 'head',
    value: 'Account'
  },
  {
    key: 'title',
    value: 'Change Password'
  },
  {
    key: 'subtitle',
    value: ''
  },
  {
    key: 'saveText',
    value: submitText.SAVE
  }
];

export const userRolePageValues = [
  ...initPageValues,
  {
    key: 'head',
    value: 'Account'
  },
  {
    key: 'title',
    value: 'User Roles'
  }
];

export const languagePageValues = [
  ...initPageValues,
  {
    key: 'head',
    value: 'General'
  },
  {
    key: 'title',
    value: 'Languages'
  }
];

export const recordPageValues = [
  ...initPageValues,
  {
    key: 'head',
    value: 'General'
  },
  {
    key: 'title',
    value: 'Records'
  }
];
