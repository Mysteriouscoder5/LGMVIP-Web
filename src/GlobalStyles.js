import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  
  }
  
  
  html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
    heigth:100vh;
    width:100vw;
  }
  
  body {
    heigth:100vh;
    width:100vw;
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
    background-color: #f1f5f9;

    
      
  
  }

  hr{
    width:80%;
    height:1px;
    color:rgba(29,29,29.5);
    border-radius:1rem;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  

`;
