import { options } from './OptionValues';
import { columnType, dtFormat } from '@/utilities/constants/application';

export const lastTableColumns: any = [
  {
    field: 'updated_at',
    type: columnType.DATETIME,
    headerName: 'Updated At',
    format: dtFormat.DATETIME_0,
    flex: 1
  }
];

export const lastTableColumns2: any = [
  {
    field: 'updated_at',
    type: columnType.DATETIME,
    headerName: 'Updated At',
    format: dtFormat.DATETIME_0,
    flex: 1
  }
];

export const userRoleTableColumns = [
  {
    field: 'name',
    type: columnType.SELECT,
    headerName: 'User Role',
    lookup: options.userRole,
    flex: 1
  },
  {
    field: 'level',
    type: columnType.SELECT,
    headerName: 'User Level',
    lookup: options.userLevel,
    flex: 1
  },
  ...lastTableColumns
];

export const userTableColumns = [
  {
    field: 'fullname',
    type: columnType.STRING,
    headerName: 'Full Name',
    flex: 1
  },
  {
    field: 'username',
    type: columnType.STRING,
    headerName: 'Username',
    flex: 1
  },
  {
    field: 'phone',
    type: columnType.STRING,
    headerName: 'Phone',
    flex: 1
  },
  {
    field: 'description',
    type: columnType.STRING,
    headerName: 'Description',
    flex: 1
  },
  ...lastTableColumns
];

export const regionTableColumns = [
  {
    field: 'name',
    type: columnType.STRING,
    headerName: 'Language',
    flex: 1
  },
  {
    field: 'active',
    type: columnType.CHIP,
    headerName: 'Active',
    flex: 1
  },
  ...lastTableColumns
];

export const townshipTableColumns = [
  {
    field: 'name',
    type: columnType.STRING,
    headerName: 'Record',
    flex: 1
  },
  {
    field: 'category',
    type: columnType.STRING,
    headerName: 'Category',
    flex: 1
  },
  {
    field: 'language',
    type: columnType.STRING,
    headerName: 'Language',
    flex: 1
  },
  {
    field: 'page_count',
    type: columnType.STRING,
    headerName: 'Region',
    flex: 1
  },
  {
    field: 'active',
    type: columnType.CHIP,
    headerName: 'Active',
    flex: 1
  },
  ...lastTableColumns
];
