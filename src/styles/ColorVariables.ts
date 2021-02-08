import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;

    --color-dark-gray: #4F4F4F;
    --color-light-gray: #BDBDBD;
  }
`;

export default ColorVariables;
