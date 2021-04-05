import { ReactElement } from 'react';
import styled from 'styled-components';
import WithClassName from '../../interfaces/WithClassName';
import WithChildren from '../../interfaces/WithChildren';
import { sansSerifLight } from '../../styles/FontStyles';
import WithOnClick from '../../interfaces/WithOnClick';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  height: 48px;
  width: 100%;
  background: var(--color-white);
  ${ sansSerifLight };
  font-size: 14px;
  color: var(--color-dark-gray);
  box-shadow: var(--shadow-medium);

  border: .5px solid #E0E0E0;
  border-radius: 2px;
  outline: none;

  cursor: pointer;
  user-select: none;
`;

interface AsideBottomButtonProps extends WithClassName, WithChildren, WithOnClick {}

/**
 * Bottom button for asides
 * Uses for "Routes" and "Map search" buttons
 *
 * @param props - props of component
 */
export default function AsideBottomButton(props: AsideBottomButtonProps): ReactElement {
  return (
    <Button className={props.className} onClick={props.onClick}>
      { props.children }
    </Button>
  );
}
