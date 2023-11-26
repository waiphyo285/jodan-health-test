import { Card, CardContent, Grid, Typography } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import PageWrapper from '@/components/PageWrapper';

import dashboardValues from '@/initialValues/pages/Dashbord';
// import WatchList from '@/contents/Dashboard/Admin/WatchList';

function DashboardOne() {
  const pageValues = dashboardValues.makePageValues();

  return (
    <PageWrapper pageValues={pageValues} createAction={<></>}>
      {[1, 2, 4, 5, 6, 7, 8, 9].map((card, index) => (
        <Grid item key={index} xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Card Title {card}
              </Typography>
              <Typography variant="h3" align="center" marginTop={1}>
                {Math.floor(Math.random() * 100) + 1}
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
