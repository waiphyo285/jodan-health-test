import { appInfo } from '@/utilities/constants/application';
import { Box, Container, Link, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
        position: relative; // absolute
        bottom: 0;
        width: 100%;
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        alignItems="center"
        display={{ xs: 'block', md: 'flex' }}
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2024 - {appInfo.DESCRIPTION}
          </Typography>
        </Box>
        <Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
          Developed by{' '}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            {appInfo.NAME}
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
