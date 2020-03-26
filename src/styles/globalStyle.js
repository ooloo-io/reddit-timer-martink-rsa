import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts[0]};
    color: ${(props) => props.theme.colors.textSecondary.main};
  }
  body {
    font-family: ${(props) => props.theme.fonts[1]};
    color: ${(props) => props.theme.colors.textPrimary.main};
  }
`;

export default GlobalStyle;
