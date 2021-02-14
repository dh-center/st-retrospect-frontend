import { createGlobalStyle } from 'styled-components';

/**
 * CSS box shadow variables
 */
const ShadowVariables = createGlobalStyle`
  :root {
    --shadow-base: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04);
    --shadow-large: 0 16px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  }
`;

export default ShadowVariables;
