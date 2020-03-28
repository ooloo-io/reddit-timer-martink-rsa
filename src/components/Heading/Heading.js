import React from 'react';
import { H1, H2, Subtitle } from './Heading.style';

function Heading({ title, subtitle, children }) {
  return (
    <H1>{children}</H1>
  )
}

export default Heading;
