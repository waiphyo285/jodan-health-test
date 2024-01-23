import { fieldType } from '@/utilities/constants/application';
import { options } from './OptionValues';

export const userFormFields = [
  {
    name: 'fullname',
    type: fieldType.TEXT,
    label: 'Full Name *',
    xsGrid: 6
  },
  {
    name: 'phone',
    type: fieldType.TEXT,
    label: 'Phone Number *',
    xsGrid: 6
  },
  {
    name: 'role_id',
    type: fieldType.SELECT,
    label: 'User Role *',
    xsGrid: 6,
    options: [],
    optionKeyProp: 'id',
    optionLabelProp: 'name'
  },
  {
    name: 'username',
    type: fieldType.TEXT,
    label: 'Username *',
    xsGrid: 6
  },
  {
    name: 'password',
    type: fieldType.TEXT,
    label: 'Password *',
    xsGrid: 3,
    disableEdited: true
  },
  {
    name: 're_password',
    type: fieldType.TEXT,
    label: 'Confirm Password *',
    xsGrid: 3,
    disableEdited: true
  },
  {
    name: 'description',
    type: fieldType.TEXT,
    label: 'Description *',
    xsGrid: 12
  }
];

export const editUserFormFields = [
  {
    name: 'name',
    type: fieldType.TEXT,
    label: 'Full Name *',
    xsGrid: 12
  },
  {
    name: 'phone',
    type: fieldType.TEXT,
    label: 'Phone Number *',
    xsGrid: 12
  },
  {
    name: 'address',
    type: fieldType.TEXT,
    label: 'Address *',
    xsGrid: 12
  }
];

export const changePasswordFormFields = [
  {
    name: 'password',
    type: fieldType.TEXT,
    label: 'Old Password *',
    xsGrid: 12
  },
  {
    name: 'new_password',
    type: fieldType.TEXT,
    label: 'New Password *',
    xsGrid: 12
  },
  {
    name: 'confirm_password',
    type: fieldType.TEXT,
    label: 'Confirm Password *',
    xsGrid: 12
  }
];

export const userRoleFormFields = [
  {
    name: 'name',
    type: fieldType.SELECT,
    label: 'User Role *',
    options: options.userRole,
    optionKeyProp: 'value',
    optionLabelProp: 'label',
    xsGrid: 12
  },
  {
    name: 'level',
    type: fieldType.RADIOBOX,
    label: 'Choose the desired access level from the available options. *',
    options: options.userLevel,
    xsGrid: 12
  }
];

export const languageFormFields = [
  {
    name: 'name',
    type: fieldType.TEXT,
    label: 'Language *',
    xsGrid: 12
  },
  {
    name: 'active',
    type: fieldType.SWITCH,
    label: 'Is active record?',
    xsGrid: 6
  }
];

export const townshipFormFields = [
  {
    name: 'name',
    type: fieldType.TEXT,
    label: 'Record *',
    xsGrid: 12
  },
  {
    name: 'category',
    type: fieldType.TEXT,
    label: 'Category *',
    xsGrid: 12
  },
  {
    name: 'page_count',
    type: fieldType.NUMBER,
    label: 'Page Count *',
    xsGrid: 12
  },
  {
    name: 'language_id',
    type: fieldType.SELECT,
    label: 'Language *',
    xsGrid: 12,
    options: [],
    optionKeyProp: 'id',
    optionLabelProp: 'name'
  },
  {
    name: 'active',
    type: fieldType.SWITCH,
    label: 'Is active record?',
    xsGrid: 6
  }
];
