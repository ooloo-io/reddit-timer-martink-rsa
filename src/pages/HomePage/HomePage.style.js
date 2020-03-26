import styled from 'styled-components';

const Heading1 = styled.h1`
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  color: ${(props) => props.theme.colors.textPrimary.main};
`;

const Heading2 = styled.h2`
  font-family: ${(props) => props.theme.fonts[1]}, sans-serif;
  color: ${(props) => props.theme.colors.textSecondary.main};
`;

export { Heading1, Heading2 };
