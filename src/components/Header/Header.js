import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import {
  HeaderWrapper,
  LogoContainer,
  LinksContainer,
} from './Header.style';

function Header({ logo, links }) {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </LogoContainer>
      <LinksContainer>
        {links.map((item) => (
          <Link key={item.title} to={item.link}>{item.title}</Link>
        ))}
      </LinksContainer>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default Header;
