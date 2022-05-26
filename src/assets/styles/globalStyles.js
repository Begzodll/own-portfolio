import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;


  }

  h1, h2, h3, h4, h5, h6 {
    display: inline-block;

  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    height: 2px;
    width: 16px;
    background-position: center 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #F3EAE4;
    border-radius: 2px;
  }

  ::selection {
    color: #efefef;
    background: #919191;
  }
`;

export default GlobalStyle;
