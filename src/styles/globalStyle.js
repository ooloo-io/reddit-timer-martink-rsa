import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100vh;
  }
  body {
    font-family: ${(props) => props.theme.fonts[1]};
    color: ${(props) => props.theme.colors.gray.main};
  }
  h2 {
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;
