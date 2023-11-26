import { getCurrentUser } from '@/utilities/Getters';
import { Typography, Grid } from '@mui/material';

function PageListTitle({ title, subtitle, actions }) {
  const currentUser = getCurrentUser();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        {title && (
          <Typography variant="h3" component="h3" gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subtitle2">
            <strong>{currentUser?.username}!</strong> {subtitle}
          </Typography>
        )}
      </Grid>
      <Grid item>{actions}</Grid>
    </Grid>
  );
}

export default PageListTitle;
