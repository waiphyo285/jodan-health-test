import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';

import {
  Facebook,
  Twitter,
  Instagram,
  MailOutlined
} from '@mui/icons-material';

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
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)};
`
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
  font-size: ${theme.typography.pxToRem(75)};
`
);

const TypographyH3 = styled(Typography)(
  ({ theme }) => `
  color: ${theme.colors.alpha.black[50]};
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ButtonNotify = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

function calculateTimeLeft() {
  const difference = +new Date(`2023`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timerComponents = [];

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Box textAlign="center" px={3}>
        <TypographyH1 variant="h1">{timeLeft[interval]}</TypographyH1>
        <TypographyH3 variant="h3">{interval}</TypographyH3>
      </Box>
    );
  });

  return (
    <>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box textAlign="center" mb={3}>
              <Container maxWidth="xs">
                <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
                  Coming Soon
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  We're working on implementing the last features before our
                  launch!
                </Typography>
              </Container>
              <img
                alt="Coming Soon"
                height={200}
                src="/static/images/status/coming-soon.svg"
              />
            </Box>

            <Box display="flex" justifyContent="center">
              {timerComponents.length ? timerComponents : <>Time's up!</>}
            </Box>

            <Container maxWidth="sm">
              <Box sx={{ textAlign: 'center', p: 4 }}>
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInputWrapper
                    type="text"
                    placeholder="Enter your email address here..."
                    endAdornment={
                      <InputAdornment position="end">
                        <ButtonNotify variant="contained" size="small">
                          Notify Me
                        </ButtonNotify>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlined />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>
                    We'll email you once our website is launched!
                  </FormHelperText>
                </FormControl>
                <Divider sx={{ my: 4 }} />
                <Box sx={{ textAlign: 'center' }}>
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
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default ComingSoon;

ComingSoon.getLayout = function getLayout(page: ReactElement) {
  return <StatusLayout>{page}</StatusLayout>;
};
