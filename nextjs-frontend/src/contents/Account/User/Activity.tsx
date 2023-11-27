import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  styled
} from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
    color: ${theme.colors.primary.main};
    background: ${theme.colors.primary.lighter};
`
);

const UserActivity = ({ user }) => {
  return (
    <Card>
      <CardHeader title="Activity" />
      <Divider />
      <Box p={2} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <AccessTimeIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h6">Last updated</Typography>

          <Box display="flex">
            <Typography variant="body1"> {user.updated_at}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box p={2} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <AccessTimeIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h6">Account created</Typography>

          <Box display="flex">
            <Typography variant="body1"> {user.created_at} </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default UserActivity;
