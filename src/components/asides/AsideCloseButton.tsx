import { ReactElement } from 'react';
import styled from 'styled-components';
import LeftArrowIcon from '../../assets/arrow-left.svg';

/**
 * AsideCloseButton props
 */
interface AsideCloseButtonProps {
  /**
   * Will button close or open aside
   */
  willClose: boolean;

  /**
   * On button click event handler
   */
  onClick: () => void;

  /**
   * Component class name
   */
  className?: string;
}

const CloseButton = styled.div<AsideCloseButtonProps>`
  height: 48px;
  width: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-white);
  border-radius: 0 2px 2px 0;
  opacity: 0.8;
  cursor: pointer;

  &::before {
    height: 14px;
    width: 8px;

    content: '';
    background-image: url("${LeftArrowIcon}");
    background-size: cover;

    transform: rotate(${props => props.willClose ? '0deg' : '180deg'});
  }
`;

/**
 * Button for close aside component
 *
 * @param props - component props
 */
function AsideCloseButton(props: AsideCloseButtonProps): ReactElement {
  return (
    <CloseButton onClick={props.onClick} willClose={props.willClose} className={props.className}/>
  );
}

export default AsideCloseButton;
