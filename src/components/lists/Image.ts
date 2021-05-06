import styled from 'styled-components';

/**
 * Props of image block
 */
interface ImageProps {
  /**
   * Source of image
   */
  src: string;
}

/**
 * Image block in item in lists
 *
 * @param props - props of component
 */
export default styled.div<ImageProps>`
  min-width: 60px;
  min-height: 100%;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
