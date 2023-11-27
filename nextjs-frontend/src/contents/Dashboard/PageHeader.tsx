import { getCurrentUser } from '@/utilities/Getters';
import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PageHeader() {
  const theme = useTheme();
  const currentUser = getCurrentUser();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={currentUser?.username}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {currentUser?.username}!
        </Typography>
        <Typography variant="subtitle2">
          Today is a good day to start trading crypto assets!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
