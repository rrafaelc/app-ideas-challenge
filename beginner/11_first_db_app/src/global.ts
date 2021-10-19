import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  // https://stackoverflow.com/questions/67601508/why-do-my-styled-component-keyframes-error-with-ts-styled-plugin9999-in-react
  ${`color-scheme: dark`}
}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background: #212121;
    color: #fff;
  }

  button {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
