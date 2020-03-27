import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderWrapper,
  LogoContainer,
  LinksContainer,
  NavLink,
} from './Header.style';

function Header({ logo, links }) {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </LogoContainer>
      <LinksContainer>
        {links.map((item) => (
          <NavLink key={item.title} to={item.link} alt={item.title}>{item.title}</NavLink>
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
