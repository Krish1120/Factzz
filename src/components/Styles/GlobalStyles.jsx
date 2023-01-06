import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
  }
  html{
    height:100vh;
    width:100vw;
  }
`;
export default GlobalStyle;
