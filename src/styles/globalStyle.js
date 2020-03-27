import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root, html, body {
    height: 100%;
  }
  body {
    font-family: ${(props) => props.theme.fonts[1]};
    color: ${(props) => props.theme.colors.textPrimary.main};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts[0]};
    color: ${(props) => props.theme.colors.textPrimary.main};
  }
  h1 {
    font-size: 2.375rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  a {
    color: ${(props) => props.theme.colors.textPrimary.main};
    text-decoration: none;
    transition: color 300ms ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.textPrimary.light};
    }
  }
`;

export default GlobalStyle;
