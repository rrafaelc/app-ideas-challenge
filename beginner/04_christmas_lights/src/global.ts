import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    max-width: 1300px;
    margin: 0 auto;

    font-family: sans-serif;
    color: #fff;
    background: #181a1b;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
