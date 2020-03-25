import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.primary.main};
`;

function HomePage() {
  return <Heading>HomePage page placeholder</Heading>;
}

export default HomePage;
