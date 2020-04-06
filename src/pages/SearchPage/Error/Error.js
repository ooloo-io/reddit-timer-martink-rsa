import React from 'react';
import PropTypes from 'prop-types';

function Error({ message }) {
  return (
    <p>{message}</p>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
