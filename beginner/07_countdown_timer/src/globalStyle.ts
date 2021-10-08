import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      border: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

    body {
      background-color: #161616;      
      color: #fdfdfd;

      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    button {
      cursor: pointer;
    }
`;

export default GlobalStyle;
