import { createGlobalStyle } from 'styled-components';
import { sansSerifRegular } from './FontStyles';

/**
 * Global CSS styles for application
 */
const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    ${ sansSerifRegular };
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right,
  .mapboxgl-ctrl-top-left,
  .mapboxgl-ctrl-top-right {
    z-index: 0;
  }
`;

export default GlobalStyles;
