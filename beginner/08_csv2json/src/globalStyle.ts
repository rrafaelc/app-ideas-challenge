import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  html, body {
    height: 100vh;
  }

  body {
    background-color: #1b1b1b;
    color: #fff;

    max-width: 1200px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;

export default Global;
