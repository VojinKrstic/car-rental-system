import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: #171717;
    background: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
