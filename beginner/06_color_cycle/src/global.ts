import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  box-sizing: border-box;

  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {  
  background-color: #111;
  color: #fff;

  max-width: 1300px;
  padding: 0 30px;
  margin: 0 auto;
}

button {
  cursor: pointer;
}

input:disabled {
  color: #fff;
}

`;

export default GlobalStyle;
