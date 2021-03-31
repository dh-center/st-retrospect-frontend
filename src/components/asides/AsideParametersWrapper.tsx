import styled from 'styled-components';
import { sansSerifLight } from '../../styles/FontStyles';

/**
 * Parameters wrapper for asides with box-shadow
 */
export default styled.div`
  padding: 0 16px 24px;
  margin: 0 -16px;

  ${ sansSerifLight };
  box-shadow: var(--shadow-base);
`;
