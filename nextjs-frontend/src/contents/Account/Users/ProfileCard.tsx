import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Avatar,
  Button,
  Typography,
  CardContent,
  ButtonGroup
} from '@mui/material';
import {
  EditOutlined,
  PhoneOutlined,
  SettingsOutlined,
  MyLocationOutlined,
  PersonOutlineOutlined
} from '@mui/icons-material';

const ProfileCard = ({ user }) => {
  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box py={1}>
            <Avatar
              variant="rounded"
              alt={user.username}
              src={user.avatar}
              sx={{
                width: '100px',
                height: '100px',
                marginRight: 5
              }}
            />

            <Typography sx={{ py: 1.6 }} gutterBottom variant="h4">
              {user.name}
            </Typography>
          </Box>

          <Box py={1}>
            <Typography sx={{ py: 1 }} variant="subtitle2" color="text.primary">
              <PersonOutlineOutlined
                fontSize="small"
                style={{ verticalAlign: 'middle', marginRight: '4px' }}
              />
              @{user.username}
            </Typography>

            <Typography sx={{ py: 1 }} variant="subtitle2" color="text.primary">
              <PhoneOutlined
                fontSize="small"
                style={{ verticalAlign: 'middle', marginRight: '4px' }}
              />
              {user.phone}
            </Typography>

            <Typography sx={{ py: 1 }} variant="subtitle2" color="text.primary">
              <MyLocationOutlined
                fontSize="small"
                style={{ verticalAlign: 'middle', marginRight: '4px' }}
              />
              {user.address}
            </Typography>

            <ButtonGroup sx={{ my: 1.2 }} variant="outlined" size="small">
              <Link href="/account/profile/edit_information">
                <Button startIcon={<EditOutlined />}>Edit profile</Button>
              </Link>
              <Link href="/account/profile/change_password">
                <Button startIcon={<SettingsOutlined />}>
                  Change password
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default ProfileCard;
