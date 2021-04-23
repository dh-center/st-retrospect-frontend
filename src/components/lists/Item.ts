import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Item in a list with router link
 */
export default styled(Link)`
  display: flex;

  border: .5px solid #F2F2F2;
  border-radius: 2px;
  overflow: hidden;

  text-decoration: none;
  color: var(--color-dark-gray);

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:hover {
    background: var(--color-light-blue);
  }
`;
