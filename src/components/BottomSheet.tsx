import { ReactElement } from 'react';
import styled from 'styled-components';
import WithChildren from '../interfaces/WithChildren';

const BottomSheetContent = styled.div``;

const BottomSheetHeaderDraggable = styled.div`
  height: 44px;
  width: 100vw;

  margin-top: -44px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: var(--color-white);
  color: var(--color-blue);

  position: fixed;
`;

const BottomSheetHeaderDash = styled.div`
  width: 24px;
  height: 4px;

  background-color: var(--color-blue);
  border-radius: 2px;
`;

/**
 * Component for displaying bottom sheet in tablet or mobile view
 *
 * @param props - props of component
 */
function BottomSheet(props: WithChildren): ReactElement {
  return (
    <>
      <BottomSheetHeaderDraggable>
        <BottomSheetHeaderDash/>
      </BottomSheetHeaderDraggable>
      <BottomSheetContent>
        {props.children}
      </BottomSheetContent>
    </>
  );
}

export default BottomSheet;
