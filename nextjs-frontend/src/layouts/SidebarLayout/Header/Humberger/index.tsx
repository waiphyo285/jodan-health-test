import { Box, IconButton, Tooltip } from '@mui/material';
import { CloseOutlined, MenuOutlined } from '@mui/icons-material';

function HumbergerMenu({ sidebarToggle, toggleSidebar }) {
  return (
    <Box
      component="span"
      sx={{
        ml: 2,
        display: { lg: 'none', xs: 'inline-block' }
      }}
    >
      <Tooltip arrow title="Toggle Menu">
        <IconButton color="primary" onClick={toggleSidebar}>
          {!sidebarToggle ? (
            <MenuOutlined fontSize="small" />
          ) : (
            <CloseOutlined fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default HumbergerMenu;
