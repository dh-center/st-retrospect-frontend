import { createGlobalStyle } from 'styled-components';

/**
 * CSS border variables
 */
const BorderVariables = createGlobalStyle`
  :root {
    --border-blue: 1px solid var(--color-blue);
  }
`;

export default BorderVariables;
