import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Link from '../Link/Link';
import {
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from './Footer.style';

function Footer({ logo, links }) {
  return (
    <FooterWrapper>
      <FooterLeft>
        <Link href={links[0].link} alt={links[0].title}>
          {links[0].title}
        </Link>
      </FooterLeft>
      <FooterCenter>
        <Link to="/" alt="Home">
          <img src={logo} alt="Logo" />
        </Link>
      </FooterCenter>
      <FooterRight>
        <Link to={links[1].link} alt={links[1].title}>
          {links[1].title}
        </Link>
      </FooterRight>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default Footer;
