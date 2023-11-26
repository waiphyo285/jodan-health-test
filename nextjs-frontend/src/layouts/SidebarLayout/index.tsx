import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';

import { RouteGuard } from '@/components/RouteGuard';
// import Progressbar from '@/components/Progressbar';

import ApplicationHeader from './Header';
import ApplicationSidebar from './Sidebar';
import ApplicationFooter from './Footer';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <ApplicationHeader />
      <ApplicationSidebar />
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          display: 'block',
          zIndex: 5,
          pt: `${theme.header.height}`,
          [theme.breakpoints.up('lg')]: {
            ml: `${theme.sidebar.width}`
          }
        }}
      >
        <RouteGuard>
          <Box display="block">{children}</Box>
        </RouteGuard>

        <ApplicationFooter />
      </Box>
    </Box>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node
};

export default SidebarLayout;
