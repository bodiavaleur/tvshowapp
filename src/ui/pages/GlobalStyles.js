import { createGlobalStyle } from 'styled-components';

export const CarouselStyle = createGlobalStyle`
  .alice-carousel__wrapper {
    padding: 20vh;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }

  html, #root, main {
    overflow: hidden;
  }

  main {
    width: 100vw;
    height: 100vh;
  }
`;
