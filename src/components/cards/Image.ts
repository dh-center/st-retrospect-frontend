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
 * Image block in entity cards
 *
 * @param props - props of component
 */
export default styled.div<ImageProps>`
  min-width: 100%;
  min-height: 144px;

  background-image: url("${ props => props.src }");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
