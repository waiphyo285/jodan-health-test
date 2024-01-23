import { Card, CardContent, Grid, Typography } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import PageWrapper from '@/components/PageWrapper';
import WatchList from '@/contents/Dashboard/WatchList';

import dashboardValues from '@/sources/pages/Dashbord';

function DashboardOne() {
  const pageValues = dashboardValues.makePageValues();

  return (
    <PageWrapper pageValues={pageValues} createAction={<></>}>
      {['Users', 'User roles', 'Languages', 'Records'].map((card, index) => (
        <Grid item key={index} xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                {card}
              </Typography>
              <Typography variant="h3" align="center" marginTop={1}>
                1 {/* {Math.floor(Math.random() * 100) + 1} */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* <Grid item xs={12}>
        <WatchList />
      </Grid> */}
    </PageWrapper>
  );
}

DashboardOne.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardOne;
