import React from 'react';
import HomePageWrapper from './HomePage.style';
import Hero from '../../components/Hero/Hero';
import Info from '../../components/Info/Info';

function HomePage() {
  return (
    <HomePageWrapper>
      <Hero />
      <Info />
    </HomePageWrapper>
  );
}

export default HomePage;
