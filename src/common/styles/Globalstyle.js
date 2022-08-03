import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --bordergray: #EBEDF2;
    --bggray: #fcfcfc;
    --black: #141746;
  }

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
 
  * {
    box-sizing: border-box;
    &:focus, &:active {
      outline: none;
    }
  }
  
  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;  
  }

  div,
  h1,
  h2,
  span,
  p,
  button,
  img,
  main,
  section {
    margin: 0;
    padding: 0;
    border: 0;
  }

`;

export default GlobalStyle;