import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';

interface ErrorWrapperProps {
  children?: ReactNode;
}

const ErrorWrapper: FC<ErrorWrapperProps> = ({ children }) => {
  return (
    <strong
      style={{
        fontSize: 'small',
        display: 'block',
        color: '#FF1943',
        marginTop: '5px',
        marginLeft: ' 8px'
      }}
    >
      {children}
    </strong>
  );
};

ErrorWrapper.propTypes = {
  children: PropTypes.node
};

export default ErrorWrapper;
