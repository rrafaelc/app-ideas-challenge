import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    // Cannot remove margin and padding from * because it will break the markdown style content
    margin: 0;
		padding: 0;
    background-color: #f1faee;
  }

  button {
    cursor: pointer;
  }
`;
