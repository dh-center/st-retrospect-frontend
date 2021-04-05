import { ReactElement } from 'react';
import styled from 'styled-components';
import RangeThumb from '../assets/range-thumb.svg';
import { sansSerifLight } from '../styles/FontStyles';
import { YearsInputsElementProps } from '../interfaces/YearsInputsElementProps';

const RangeWrapper = styled.div`
  position: relative;

  height: 47px;
  margin: 24px -5px 0 -6px;

  ${ sansSerifLight };
  font-size: 14px;
  color: var(--color-dark-gray);
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
 * @param props - properties (min and max values of years)
 */
function CustomRange(props: YearsInputsElementProps): ReactElement {
  const onChange = props.onChange;

  return (
    <RangeWrapper>

      { props.label &&
        <RangeLabel>
          { props.label }
        </RangeLabel>
      }

      <RangeLine/>

      <RangeInput
        type="range"
        value={props.left}
        min={props.min}
        max={props.max}

        onChange={(value) => {
          if (!onChange) {
            return;
          }

          if (value.target.value > props.right) {
            onChange({
              left: props.right,
              right: value.target.value,
            });
          } else {
            onChange({
              left: value.target.value,
              right: props.right,
            });
          }
        }}
      />

      <RangeInput
        type="range"
        value={props.right}
        min={props.min}
        max={props.max}
        onChange={value => {
          if (!onChange) {
            return;
          }

          if (value.target.value < props.left) {
            onChange({
              left: value.target.value,
              right: props.left,
            });
          } else {
            onChange({
              left: props.left,
              right: value.target.value,
            });
          }
        }}
      />

    </RangeWrapper>
  );
}

export default CustomRange;
