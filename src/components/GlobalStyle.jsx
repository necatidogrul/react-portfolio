import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    
  }

  html {
    overflow-x: hidden;
  }

  body{
    justify-content:center;
  }

  h1 {
    font-size: 120px;
    font-weight: 700;
    line-height: 120px;
    letter-spacing: -4px;
    text-align: left;
    vertical-align: top;
    color: #0c7f86;
  }

  h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 94.5px;
    color: #0c7f86;
  }

  h3 {
    font-size: 42px;
    font-weight: 700;
    line-height: 54.6px;
    color: #0c7f86;
  }

  h4 {
    font-size: 32px;
    font-weight: 600;
    line-height: 30px;
    color: #0c7f86;
  }

  .caption {
    font-size: 12px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 5px;
    text-decoration: none;
    color: #084b4f;
  }
  p{
    color:black;
  }

  body {
    background: linear-gradient(90deg, rgb(229, 255, 249) 40%, rgb(184, 228, 218) 40%);
    position: relative;
    font-size: 16px;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .align-center {
    align-items: center;
  }
`;

export default GlobalStyle;
