import {
  NumbersOutlined,
  DashboardOutlined,
  PeopleAltOutlined,
  CloudQueueOutlined,
  CountertopsOutlined,
  DescriptionOutlined,
  VerifiedUserOutlined,
  LocationCityOutlined,
  LocalGasStationOutlined,
  RoomPreferencesOutlined
} from '@mui/icons-material';

export const SidebarMenuList: any = [
  {
    name: 'overview',
    title: 'Overview',
    subMenu: [
      {
        name: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardOutlined />,
        link: '/dashboard/admin-1'
      }
    ]
  },
  {
    name: 'account',
    title: 'Accounts',
    subMenu: [
      {
        name: 'user',
        title: 'Users',
        icon: <PeopleAltOutlined />,
        link: '/account/users'
      },
      {
        name: 'user_role',
        title: 'User Roles',
        icon: <VerifiedUserOutlined />,
        link: '/account/user-roles'
      }
    ]
  },
  {
    name: 'general',
    title: 'General',
    subMenu: [
      {
        name: 'region',
        title: 'Regions',
        icon: <LocationCityOutlined />,
        link: '/general/regions'
      },
      {
        name: 'township',
        title: 'Townships',
        icon: <LocationCityOutlined />,
        link: '/general/townships'
      }
    ]
  }
  // {
  //   name: 'application',
  //   title: 'Application',
  //   subMenu: [
  //     {
  //       name: 'version',
  //       title: 'App Versions',
  //       icon: <NumbersOutlined />,
  //       link: '/application/versions'
  //     },
  //     {
  //       name: 'information',
  //       title: 'App Information',
  //       icon: <DescriptionOutlined />,
  //       link: '/application/informations'
  //     },
  //     {
  //       name: 'setting',
  //       title: 'Settings',
  //       icon: <SettingsOutlined />,
  //       link: '/account/settings'
  //     }
  //   ]
  // },
  // {
  //   name: 'extra',
  //   title: 'Extra Pages',
  //   subMenu: [
  //     {
  //       name: 'err-404',
  //       title: 'Error 404',
  //       icon: <ErrorOutlined />,
  //       link: '/status/404'
  //     },
  //     {
  //       name: 'err-500',
  //       title: 'Error 500',
  //       icon: <ErrorOutlined />,
  //       link: '/status/500'
  //     },
  //     {
  //       name: 'coming-soon',
  //       title: 'Coming Soon',
  //       icon: <ErrorOutlined />,
  //       link: '/status/coming-soon'
  //     },
  //     {
  //       name: 'maintenance',
  //       title: 'Maintenance',
  //       icon: <ErrorOutlined />,
  //       link: '/status/maintenance'
  //     }
  //   ]
  // }
];
