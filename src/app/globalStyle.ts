import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  *::before, *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
