import { Box } from '@mui/material';
// import HeaderSearch from './Search';
// import HeaderNotifications from './Notification';
// import { findAccessHeaderItem } from '@/utilities/helpers';
// import { acccessComponents } from '@/utilities/constants/storeKeys';

function HeaderButtons() {
  return (
    <Box sx={{}}>
      {/* {findAccessHeaderItem(acccessComponents.CAN_VIEW_SEARCH) && (
        <Box sx={{}} component="span">
          <HeaderSearch />
        </Box>
      )} */}
      {/* {!findAccessHeaderItem(acccessComponents.CAN_VIEW_SCANQR) && (
        <Box sx={{}} component="span">
          <HeaderScanQR />
        </Box>
      )} */}
      {/* {findAccessHeaderItem(acccessComponents.CAN_VIEW_NOTIFICATION) && (
        <Box sx={{}} component="span">
          <HeaderNotifications />
        </Box>
      )} */}
    </Box>
  );
}

export default HeaderButtons;
