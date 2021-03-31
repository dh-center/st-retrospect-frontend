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

    --color-blue: #2F80ED;
    --color-light-blue: rgba(47, 128, 237, 0.13);
  }
`;

export default ColorVariables;
