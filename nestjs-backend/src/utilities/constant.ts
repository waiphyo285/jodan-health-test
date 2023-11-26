export const PAGE_QUERY = {
  filterObj: {},
  skipPage: 0,
  takeRows: 10,
  searchKey: 'name',
  searchVal: '',
  sortKey: 'updated_at',
  sortVal: 'desc',
};

export const TRANS_STATUS = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected',
};

export const MAPPING_TYPE = {
  systemUser: 'system_user',
  publicUser: 'public_user',
  stationUser: 'station_user',
  stationStaff: 'station_staff',
};

export const VALIDATE_MSG = {
  default: 'value does not match in the system.',
  username: 'username must be letters, numbers, and underscores only.',
  password:
    'Password must be at least one uppercase, one lowercase, one number, and one special character.  ',
};

