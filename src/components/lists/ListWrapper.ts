import styled from 'styled-components';

/**
 * Props of list wrapper
 */
interface ListWrapperProps {
  /**
   * Has list next items for load
   * It needs for displaying padding if it isn't next items and LoadMoreButton is hiding
   */
  hasNext: boolean;
}

/**
 * Wrapper for list of items
 *
 * @param props - props of component
 */
export default styled.div<ListWrapperProps>`
  margin: 0 -16px;
  padding: 12px 4px ${ props => props.hasNext ? 0 : '12px' } 16px;

  overflow-y: auto;

  @media(max-width: 768px) {
    padding: 0 4px ${ props => props.hasNext ? 0 : '12px' } 16px;
  }
`;
