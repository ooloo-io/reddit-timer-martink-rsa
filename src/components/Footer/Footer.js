import React from 'react';
import Link from '../Link/Link';
import {
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from './Footer.style';
import Logo from '../../assets/images/sign.svg';

function Footer() {
  return (
    <FooterWrapper data-testid="footer">
      <FooterLeft>
        <Link
          as="a"
          href="https://ooloo.io"
          alt="ooloo.io"
        >
          ooloo.io
        </Link>
      </FooterLeft>
      <FooterCenter>
        <Link to="/" alt="Home">
          <img src={Logo} alt="Logo" />
        </Link>
      </FooterCenter>
      <FooterRight>
        <Link to="/terms" alt="Terms & Privacy">
          Terms & Privacy
        </Link>
      </FooterRight>
    </FooterWrapper>
  );
}

export default Footer;
