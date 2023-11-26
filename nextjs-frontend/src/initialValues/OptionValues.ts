export const options = {
  userRole: [
    { value: 1, label: 'Super Admin' },
    { value: 2, label: 'Station Admin' },
    { value: 3, label: 'Station Staff' }
  ],

  userLevel: [
    { value: 1, label: 'Level 1 (Enables the highest)' },
    { value: 2, label: 'Level 2 (Enables higher)' },
    { value: 3, label: 'Level 3 (Enables high)' },
    { value: 4, label: 'Level 4 (Enables low)' }
  ],

  gender: [
    { value: 1, label: 'Male' },
    { value: 2, label: 'Female' }
  ],

  platform: [
    { value: 'ios', label: 'IOS' },
    { value: 'android', label: 'Android' }
  ],

  aboutApp: [
    { value: 'policy', label: 'Policy' },
    { value: 'term_and_condition', label: 'Term & Condition' }
  ],

  notiTopic: [
    { value: 'others', label: 'Others' },
    { value: 'new_version', label: 'New version' },
    { value: 'maintenance', label: 'Maintenance' }
  ]
};
