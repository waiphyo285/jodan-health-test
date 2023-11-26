import { Box, styled, Tooltip } from '@mui/material';
import Link from '@/components/Link';
import { appInfo } from '@/utilities/constants/application';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
    display: flex;
    text-decoration: none;
    padding: ${theme.spacing(0, 1, 0, 0)};
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};

    &:hover {
      text-decoration: none;
    }
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
        margin-top: 4px;
        transform: scale(.8);
`
);

const LogoSign = styled(Box)(
  ({ theme }) => `
        top: 3px;
        left: 17px;
        width: 18px;
        height: 18px;
        position: relative;
        transform: rotate(45deg);
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.general.reactFrameworkColor};

        &:after, 
        &:before {
          top: -1px;
          right: -20px;
          content: "";
          display: block;
          width: 18px;
          height: 18px;
          position: absolute;
          transform: rotate(0deg);
          border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
          left: 0;
          right: auto;
          top: 20px;
          background: ${theme.palette.primary.main};
        }

        &:after {
          background: ${theme.palette.secondary.main};
        }
`
);

const LogoSignInner = styled(Box)(
  ({ theme }) => `
    top: 12px;
    left: 12px;
    z-index: 5;
    width: 16px;
    height: 16px;
    position: absolute;
    background: ${theme.header.background};
    border-radius: ${theme.general.borderRadiusSm};
`
);

const LogoTextWrapper = styled(Box)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
`
);

const VersionBadge = styled(Box)(
  ({ theme }) => `
    line-height: 1;
    text-align: center;
    display: inline-block;
    padding: ${theme.spacing(0.4, 1)};
    font-size: ${theme.typography.pxToRem(11)};
    color: ${theme.palette.success.contrastText};
    background: ${theme.palette.success.main};
    border-radius: ${theme.general.borderRadiusSm};
`
);

const LogoText = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(15)};
    font-weight: ${theme.typography.fontWeightBold};
`
);

function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoSignWrapper>
        <LogoSign>
          <LogoSignInner />
        </LogoSign>
      </LogoSignWrapper>
      <Box
        component="span"
        sx={{
          display: { xs: 'none', sm: 'inline-block' }
        }}
      >
        <LogoTextWrapper>
          <Tooltip title="Version 2.0" arrow placement="right">
            <VersionBadge>{appInfo.VERSION}</VersionBadge>
          </Tooltip>
          <LogoText>{appInfo.NAME}</LogoText>
        </LogoTextWrapper>
      </Box>
    </LogoWrapper>
  );
}

export default Logo;
