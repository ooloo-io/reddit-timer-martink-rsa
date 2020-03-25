import styled from 'styled-components';

const Heading1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.colors.primary.main};
`;

const Heading2 = styled.h2`
  font-family: 'Bitter', sans-serif;
  color: ${(props) => props.theme.colors.secondary.main};
`;

export { Heading1, Heading2 };
