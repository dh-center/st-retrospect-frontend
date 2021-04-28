import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-second.svg';
import { ReactElement } from 'react';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 6px;
  left: 16px;

  width: 24px;
  height: 24px;

  background: var(--color-white);
  border-radius: 2px;
  box-shadow: var(--shadow-base);
  color: var(--color-blue);
  outline: none;
  border: none;
  cursor: pointer;
`;

const Arrow = styled(ArrowLeft)`
  height: 10px;
  width: 10px;
`;

/**
 * Going back button in top-left corner
 */
export default function GoingBackButton(): ReactElement {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.goBack()}>
      <Arrow/>
    </Wrapper>
  );
}
