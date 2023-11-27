import { getCurrentUser } from '@/utilities/Getters';
import { Typography } from '@mui/material';

function PageHeader() {
  const currentUser = getCurrentUser();

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        User Settings
      </Typography>
      <Typography variant="subtitle2">
        {currentUser?.username}, this could be your user settings panel.
      </Typography>
    </>
  );
}

export default PageHeader;
