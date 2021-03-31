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
    color: var(--color-dark-gray);
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

  *::-webkit-scrollbar {
    width: 12px;

    background: var(--color-light-gray);
  }

  *::-webkit-scrollbar-thumb {
    border: 3px solid var(--color-light-gray);
    background: #E0E0E0;
  }

  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right,
  .mapboxgl-ctrl-top-left,
  .mapboxgl-ctrl-top-right {
    z-index: 0;
  }
`;

export default GlobalStyles;
