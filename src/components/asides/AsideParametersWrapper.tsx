import { ReactElement } from 'react';
import WithChildren from '../../interfaces/WithChildren';
import styled from 'styled-components';
import { sansSerifLight } from '../../styles/FontStyles';

const Wrapper = styled.div`
  padding: 0 16px 24px;
  margin: 0 -16px;

  ${ sansSerifLight };
  box-shadow: var(--shadow-base);
`;

interface AsideParametersWrapperProps extends WithChildren {}

/**
 * Wrapper for parameters in aside with box-shadow
 *
 * @param props - props of component
 */
export default function AsideParametersWrapper(props: AsideParametersWrapperProps): ReactElement {
  return (
    <Wrapper>
      { props.children }
    </Wrapper>
  );
}
