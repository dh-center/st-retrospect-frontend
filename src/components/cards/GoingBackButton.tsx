import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-second.svg';
import { ReactElement } from 'react';

const Wrapper = styled(Link)`
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
  box-shadow: (--shadow-base);
  color: var(--color-blue);
`;

const Arrow = styled(ArrowLeft)`
  height: 10px;
  width: 10px;
`;

/**
 * Going back button in top-left corner
 *
 * @param props - props of component
 */
export default function GoingBackButton(props: LinkProps): ReactElement {
  return (
    <Wrapper {...props}>
      <Arrow/>
    </Wrapper>
  );
}
