import React from 'react';
import {
  HeaderWrapper,
  LogoContainer,
  LinksContainer,
  NavLink,
} from './Header.style';
import Logo from '../../assets/images/logo.svg';

const headerLinks = [
  {
    title: 'Search',
    link: '/search?title="javascript"',
  },
  {
    title: 'How it works',
    link: '/#how-it-works',
  },
  {
    title: 'About',
    link: '/#about',
  },
];

function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </LogoContainer>
      <LinksContainer>
        {headerLinks.map((item) => (
          <NavLink key={item.title} to={item.link} alt={item.title}>{item.title}</NavLink>
        ))}
      </LinksContainer>
    </HeaderWrapper>
  );
}

export default Header;
