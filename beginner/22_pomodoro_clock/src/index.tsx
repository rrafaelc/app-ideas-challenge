import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle } from "styled-components";
import { Pomodoro } from "./Pomodoro";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    max-width: 1280px;
    margin: 0 auto;
    background: #121212;
    color: rgba(255, 255, 255, 0.6);
  }

  button {
    user-select: none;
    cursor: pointer;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Pomodoro />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
