import React from 'react';
import { HeaderWrapper, Logo, NavLink } from './Header.style';
import Link from '../Link/Link';
import LogoSVG from '../../assets/images/logo.svg';
import { getSearchPath } from '../../config';

const searchPath = getSearchPath();

const headerLinks = [
  {
    title: 'Search',
    link: searchPath,
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
    <HeaderWrapper data-testid="header">
      <Link to="/">
        <Logo src={LogoSVG} alt="Logo" data-testid="header-logo" />
      </Link>
      <nav>
        {headerLinks.map((item, index) => (
          <NavLink key={item.title} to={item.link} alt={item.title} data-testid={`navbar-${index}`}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
