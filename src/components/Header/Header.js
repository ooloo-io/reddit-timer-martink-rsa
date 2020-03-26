import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderWrapper,
  LogoContainer,
  LinksContainer,
  Link,
} from './Header.style';

function Header({ logo, links }) {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link href="/">
          <img src={logo} alt="Logo" />
        </Link>
      </LogoContainer>
      <LinksContainer>
        {links.map((item) => (
          <Link key={`${item.title}-${Math.random() * 999}`} href={item.link}>{item.title}</Link>
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
