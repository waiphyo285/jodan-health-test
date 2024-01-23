import { Box } from '@mui/material';
// import HeaderSearch from './Search';
// import HeaderNotifications from './Notification';
// import { findAccessHeaderItem } from '@/utilities/helpers';
// import { accessComponents } from '@/utilities/constants/storeKeys';

function HeaderButtons() {
  return (
    <Box sx={{}}>
      {/* {findAccessHeaderItem(accessComponents.CAN_VIEW_SEARCH) && (
        <Box sx={{}} component="span">
          <HeaderSearch />
        </Box>
      )} */}
      {/* {!findAccessHeaderItem(accessComponents.CAN_VIEW_SCANQR) && (
        <Box sx={{}} component="span">
          <HeaderScanQR />
        </Box>
      )} */}
      {/* {findAccessHeaderItem(accessComponents.CAN_VIEW_NOTIFICATION) && (
        <Box sx={{}} component="span">
          <HeaderNotifications />
        </Box>
      )} */}
    </Box>
  );
}

export default HeaderButtons;
