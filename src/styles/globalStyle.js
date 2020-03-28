import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100vh;
  }
  body {
    font-family: ${(props) => props.theme.fonts[1]};
    color: ${(props) => props.theme.colors.gray.main};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts[0]};
    color: ${(props) => props.theme.colors.textPrimary.main};
  }
  h1 {
    margin-top: 28px;
    font-size: 2.375rem;
    margin-bottom: 6px;
  }
  h2 {
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;
