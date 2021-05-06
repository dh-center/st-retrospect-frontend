import styled from 'styled-components';
import { sansSerifLight, sansSerifRegular } from '../../styles/FontStyles';

export const InformationWithTitle = styled.div`
  display: flex;

  margin-bottom: 12px;

  font-size: 16px;
  color: var(--color-dark-gray);
`;

export const InformationTitle = styled.div`
  margin-right: 6px;

  ${ sansSerifLight };
`;

export const InformationContent = styled.div`
  ${ sansSerifRegular };
`;
