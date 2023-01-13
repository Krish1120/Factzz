import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    background-color: ${({ bg }) => (bg === "light" ? "#fcfcfc" : "#252849")};

  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default GlobalStyle;
