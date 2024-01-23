import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import {
  Box,
  Avatar,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import {
  LogoutOutlined,
  ExpandMoreOutlined,
  AccountBoxOutlined,
  SettingsOutlined
} from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import { useLogout } from '@/hooks/auth/useLogout';
import { getCurrentUser } from '@/utilities/Getters';

import { findAccessHeaderItem } from '@/utilities/Helpers';
import { accessComponents } from '@/utilities/constants/storeKeys';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding-left: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
    background: ${theme.colors.alpha.black[5]};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
    display: block;
    color: ${theme.palette.secondary.main};
    font-weight: ${theme.typography.fontWeightBold};
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
    color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {
  const router = useRouter();
  const { logout } = useLogout();
  const currentUser = getCurrentUser();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const canViewProfile = findAccessHeaderItem(
    accessComponents.CAN_VIEW_PROFILE
  );

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar
          variant="rounded"
          alt={currentUser?.username}
          // src={currentUser.avatar}
        />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{currentUser?.username}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {currentUser?.role?.name}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreOutlined sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>

      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar
            variant="rounded"
            alt={currentUser?.username}
            // src={currentUser.avatar}
          />
          <UserBoxText>
            <UserBoxLabel variant="body1">{currentUser?.username}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {currentUser?.role?.name}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>

        <Divider sx={{ mb: 0 }} />
        {canViewProfile ? (
          <>
            <List sx={{ p: 1 }} component="nav">
              <NextLink href="/account/profile" passHref>
                <ListItem button>
                  <AccountBoxOutlined fontSize="small" />
                  <ListItemText primary="View profile" />
                </ListItem>
              </NextLink>
              <NextLink href="/account/change-password" passHref>
                <ListItem button>
                  <SettingsOutlined fontSize="small" />
                  <ListItemText primary="Change password" />
                </ListItem>
              </NextLink>
            </List>

            <Divider />
          </>
        ) : (
          <></>
        )}

        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            onClick={() => {
              logout();
              router.push('/');
            }}
            fullWidth
          >
            <LogoutOutlined sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
