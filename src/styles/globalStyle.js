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
    font-weight: 400;
    color: ${(props) => props.theme.colors.textPrimary.main};
  }
  h1 {
    font-size: 2.375rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  a {
    color: #0087ff;
    text-decoration: none;
  }
  ul {
    margin: 0;
    list-style: none;
    li {
      &:before {
        content: "·";
        font-weight: bold;
        display: inline-block;
        width: 9px;
        margin-left: -40px;
      }
    }
  }

`;

export default GlobalStyle;
