import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './Error.style';

function Error({ message }) {
  return (
    <ErrorMessage data-testid="error">{message}</ErrorMessage>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
