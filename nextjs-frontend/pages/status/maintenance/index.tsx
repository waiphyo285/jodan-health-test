import Head from 'next/head';
import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Tooltip,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';

import { Facebook, Twitter, Instagram } from '@mui/icons-material';

import StatusLayout from '@/layouts/StatusLayout';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  ({ theme }) => `
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)};
`
);

function Maintenance() {
  return (
    <>
      <Head>
        <title>Maintenance</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box textAlign="center">
              <Container maxWidth="sm">
                <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
                  The site is currently down for maintenance
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  We apologize for any inconveniences caused
                </Typography>
              </Container>
              <img
                alt="Maintenance"
                height={250}
                src="/static/images/status/maintenance.svg"
              />
            </Box>
            <Divider sx={{ my: 4 }} />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography component="span" variant="subtitle1">
                  Phone:{' '}
                </Typography>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="text.primary"
                >
                  +959 775 915 915
                </Typography>
              </Box>
              <Box>
                <Tooltip arrow placement="top" title="Facebook">
                  <IconButton color="primary">
                    <Facebook />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="top" title="Twitter">
                  <IconButton color="primary">
                    <Twitter />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="top" title="Instagram">
                  <IconButton color="primary">
                    <Instagram />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Maintenance;

Maintenance.getLayout = function getLayout(page: ReactElement) {
  return <StatusLayout>{page}</StatusLayout>;
};
