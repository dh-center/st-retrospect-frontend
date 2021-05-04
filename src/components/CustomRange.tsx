import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import RangeThumb from '../assets/range-thumb.svg';
import { sansSerifLight } from '../styles/FontStyles';
import { YearsInputsProps } from './YearsInputs';

/**
 * Component props with information about years and label for range
 */
interface CustomRangeProps extends YearsInputsProps {
  /**
   * Label for range input
   */
  label?: string;

  /**
   * Is component displaying
   */
  show?: boolean;
}

/**
 * Props of wrapper
 */
interface RangeWrapperProps {
  /**
   * Is component displaying
   */
  show?: boolean;
}

const RangeWrapper = styled.div<RangeWrapperProps>`
  position: relative;

  height: 47px;
  margin: 24px -5px 0 -6px;

  ${ sansSerifLight };
  font-size: 14px;
  color: var(--color-dark-gray);

  ${props => {
    if (!props.show) {
      return css`
        height: 0;
        margin: 0;
        visibility: hidden;
      `;
    }
  }};
  opacity: ${ props => props.show ? '1' : '0' };
  transition: opacity ease-out .2s,
              height ease-out .2s,
              margin ease-out .2s,
              visibility ease-out .2s;
`;

const RangeLabel = styled.div`
  margin: 0 6px;
`;

const RangeLine = styled.div`
  height: 2px;
  margin: 12px 6px 0;

  background: var(--color-light-gray);
  border-radius: 2px;
`;

const RangeInput = styled.input`
  position: absolute;

  width: 100%;
  height: 0;
  margin: 10px 0 0;
  padding: 0;

  background: transparent;
  outline: none;

  -webkit-appearance: none;

  pointer-events: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-slider-thumb {
    position: relative;

    border: none;

    width: 12px;
    height: 14px;

    background-image: url("${RangeThumb}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    outline: none;
    cursor: pointer;
    stroke: none;
    stroke-opacity: 0;

    -webkit-appearance: none;

    pointer-events: all;
  }
`;

/**
 * Custom range component
 *
 * @param props - props of component
 */
export default function CustomRange(props: CustomRangeProps): ReactElement {
  return (
    <RangeWrapper show={props.show}>
      { props.label &&
        <RangeLabel>
          { props.label }
        </RangeLabel>
      }

      <RangeLine/>

      <RangeInput
        type="range"
        value={props.values.left}
        min={props.min}
        max={props.max}

        onChange={(event) => {
          if (!props.onChange) {
            return;
          }

          if (event.target.value > props.values.right) {
            props.onChange({
              left: props.values.right,
              right: event.target.value,
            });
          } else {
            props.onChange({
              left: event.target.value,
              right: props.values.right,
            });
          }
        }}
      />

      <RangeInput
        type="range"
        value={props.values.right}
        min={props.min}
        max={props.max}
        onChange={event => {
          if (!props.onChange) {
            return;
          }

          if (event.target.value < props.values.left) {
            props.onChange({
              left: event.target.value,
              right: props.values.left,
            });
          } else {
            props.onChange({
              left: props.values.left,
              right: event.target.value,
            });
          }
        }}
      />

    </RangeWrapper>
  );
}
