import { useContext } from 'react';

import { Box, alpha, Stack, Divider, styled } from '@mui/material';
import { SidebarContext } from '@/contexts/SidebarContext';

import HeaderUserbox from './Userbox';
import HeaderButtons from './Buttons';
import HumbergerMenu from './Humberger';
// import HeaderMenu from './MenuItem';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        right: 0;
        z-index: 6;
        width: 100%;
        position: fixed;
        backdrop-filter: blur(3px);
        justify-content: space-between;
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        background-color: ${alpha(theme.header.background, 0.95)};
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            width: auto;
            left: ${theme.sidebar.width};
        }
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {/* <HeaderMenu /> */}
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
        <HumbergerMenu
          sidebarToggle={sidebarToggle}
          toggleSidebar={toggleSidebar}
        />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
