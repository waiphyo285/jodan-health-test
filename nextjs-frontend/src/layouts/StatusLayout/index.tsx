import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

interface StatusLayoutProps {
  children?: ReactNode;
}

const StatusLayout: FC<StatusLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        height: '100%'
      }}
    >
      {children}
    </Box>
  );
};

StatusLayout.propTypes = {
  children: PropTypes.node
};

export default StatusLayout;
