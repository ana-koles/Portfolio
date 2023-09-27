/* create styled component for global styles. Should be imported on high level index.tsx */

import { createGlobalStyle } from "styled-components";
import { Thema } from "./Thema";

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Manrope', sans-serif;
    src: url(./assets/fonts/Manrope-Regular.eot) format('eot'), url(Manrope-Regular.woff2) format(('woff2')), url(./assets/fonts/Manrope-Regular.ttf) format('ttf') ;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope', sans-serif;
    src: url(./assets/fonts/Manrope-SemiBold.eot) format('eot'), url(Manrope-SemiBold.woff2) format(('woff2')), url(./assets/fonts/Manrope-SemiBold.ttf) format('ttf') ;
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Epilogue', sans-serif;
    src: url(./assets/fonts/Epilogue-Light.eot) format('eot'), url(Epilogue-Light.woff2) format(('woff2')), url(./assets/fonts/Epilogue-Light.ttf) format('ttf') ;
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Epilogue', sans-serif;
    src: url(./assets/fonts/Epilogue-Regular.eot) format('eot'), url(Epilogue-Regular.woff2) format(('woff2')), url(./assets/fonts/Epilogue-Regular.ttf) format('ttf') ;
    font-weight: 400;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-style: normal;
    color: ${Thema.colors.text};
    font-size: 10px;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${Thema.colors.text}
  }

  ul {
    list-style: none;
  }

  section {
    padding: 85px 0;
  }

  section:nth-of-type(even) {
    background-color: ${Thema.colors.primaryBg};
  }

  section:last-of-type {
    background-color: ${Thema.colors.accent};
  }




`