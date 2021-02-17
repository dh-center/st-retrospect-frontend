import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;

    --color-dark-gray: #4F4F4F;
    --color-gray: #BDBDBD;
    --color-light-gray: #F2F2F2;
  }
`;

export default ColorVariables;
