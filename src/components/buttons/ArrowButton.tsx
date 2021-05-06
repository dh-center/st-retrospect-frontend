import styled from 'styled-components';
import { ReactComponent as ArrowLeftImage } from '../../assets/arrow-left-second.svg';
import { ReactComponent as ArrowRightImage } from '../../assets/arrow-right-second.svg';
import { ComponentProps, ReactElement } from 'react';

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

/**
 * Props for setting arrow direction
 */
interface ArrowProps {
  arrowDirection?: 'right' | 'left'
}

const ArrowLeft = styled(ArrowLeftImage)`
  height: 10px;
  width: 10px;
`;

type ArrowButtonProps = ComponentProps<typeof Wrapper> & ArrowProps;

/**
 * Button with arrow icon
 *
 * @param props - props for component rendering
 */
export default function ArrowButton(props: ArrowButtonProps): ReactElement {
  const image = props.arrowDirection === 'right' ? <ArrowLeft as={ArrowRightImage}/> : <ArrowLeft/>;

  return (
    <Wrapper {...props}>
      {image}
    </Wrapper>
  );
}

