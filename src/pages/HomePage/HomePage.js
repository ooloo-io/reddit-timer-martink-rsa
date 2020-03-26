import React from 'react';
// import { Heading1, Heading2 } from './HomePage.style';
import Header from '../../components/Header/Header';
import Logo from '../../assets/images/logo.svg';

const headerLinks = [
  {
    title: 'Search',
    link: '/search?title="javascript"',
  },
  {
    title: 'How it works',
    link: '#how-it-works',
  },
  {
    title: 'About',
    link: '#about',
  },
];

function HomePage() {
  return (
    <div>
      <Header logo={Logo} links={headerLinks} />
    </div>
  );
}

export default HomePage;
