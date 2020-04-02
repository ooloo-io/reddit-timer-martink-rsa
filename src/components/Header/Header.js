import React from 'react';
import {
  HeaderWrapper,
  Logo,
  NavLink,
} from './Header.style';
import Link from '../Link/Link';
import LogoSVG from '../../assets/images/logo.svg';

const headerLinks = [
  {
    title: 'Search',
    link: '/search?subreddit=javascript',
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
      <Link to="/">
        <Logo src={LogoSVG} alt="Logo" />
      </Link>
      <nav>
        {headerLinks.map((item) => (
          <NavLink key={item.title} to={item.link} alt={item.title}>{item.title}</NavLink>
        ))}
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
