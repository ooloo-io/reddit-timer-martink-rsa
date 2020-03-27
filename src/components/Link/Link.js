import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function Link({
  to, href, alt, className, children,
}) {
  // If there is a 'href', return a normal a href tag, otherwise use Router
  return href ? <a className={className} href={href} alt={alt}>{children}</a>
    : <RouterLink className={className} to={to} alt={alt}>{children}</RouterLink>;
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  to: '',
  href: '',
  alt: '',
  className: '',
};

export default Link;
