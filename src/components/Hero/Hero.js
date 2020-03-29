import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../assets/images/table.png';
import {
  HeroWrapper,
  Title,
  Subtitle,
  HeroForm,
  CTA,
  Input,
} from './Hero.style';

function Hero({ title, subtitle, cta }) {
  return (
    <HeroWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <HeroForm action="/search">
        <CTA type="submit">{cta}</CTA>
        <Input type="text" name="query" aria-label="Search" defaultValue="javascript" />
      </HeroForm>
      <Link to="/search" alt="Search">
        <img src={Table} alt="Javascript" />
      </Link>
    </HeroWrapper>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};

export default Hero;
