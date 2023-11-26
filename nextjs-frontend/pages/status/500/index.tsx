import Head from 'next/head';
import { useState } from 'react';
import {
  Box,
  Hidden,
  Typography,
  Container,
  Button,
  Grid,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { RefreshOutlined } from '@mui/icons-material';

import StatusLayout from '@/layouts/StatusLayout';
import { appInfo } from '@/utilities/constants/application';

const GridWrapper = styled(Grid)(
  ({ theme }) => `
    background: ${theme.colors.gradients.blue5};
`
);

const MainContent = styled(Box)(
  () => `
    flex: 1;
    height: 100%;
    display: flex;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

function Status500() {
  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <>
      <Head>
        <title>Code 500</title>
      </Head>
      <MainContent>
        <Grid
          container
          sx={{ height: '100%' }}
          alignItems="stretch"
          spacing={0}
        >
          <Grid
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img
                  alt="500"
                  height={260}
                  src="/static/images/status/500.svg"
                />
                <Typography variant="h3" sx={{ my: 2 }}>
                  There was an error, please try again later
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  The server encountered an internal error and was not able to
                  complete your request
                </Typography>
                <LoadingButton
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshOutlined />}
                >
                  Refresh view
                </LoadingButton>
                <Button href="/" variant="contained" sx={{ ml: 1 }}>
                  Go back
                </Button>
              </Box>
            </Container>
          </Grid>
          <Hidden mdDown>
            <GridWrapper
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              item
            >
              <Container maxWidth="sm">
                <Box textAlign="center">
                  <TypographyPrimary variant="h1" sx={{ my: 2 }}>
                    {appInfo.NAME}
                  </TypographyPrimary>
                  <TypographySecondary
                    variant="h4"
                    fontWeight="normal"
                    sx={{ mb: 4 }}
                  >
                    High performance React template built with lots of powerful
                    Material-UI components across multiple product niches for
                    fast & perfect apps development processes.
                  </TypographySecondary>
                </Box>
              </Container>
            </GridWrapper>
          </Hidden>
        </Grid>
      </MainContent>
    </>
  );
}

export default Status500;

Status500.getLayout = function getLayout(page: ReactElement) {
  return <StatusLayout>{page}</StatusLayout>;
};
