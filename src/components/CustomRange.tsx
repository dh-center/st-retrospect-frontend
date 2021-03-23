import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import RangeThumb from '../assets/range-thumb.svg';

/**
 * Props for custom range elements
 */
interface CustomRangeElementProps {
  /**
   * Minimum value
   */
  min: string;

  /**
   * Maximum value
   */
  max: string;
}

interface RangeValues {
  /**
   * Left value of range
   */
  left: string;

  /**
   * Right value of range
   */
  right: string;
}

const RangeWrapper = styled.div`
  position: relative;

  height: 20px;
  margin: 0 -6px;
`;

const RangeLine = styled.div`
  height: 2px;
  margin: 0 6px;

  background: var(--color-light-gray);
  border-radius: 2px;
`;

const RangeInput = styled.input<CustomRangeElementProps>`
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

    width: 12px;
    height: 14px;

    background-image: url("${RangeThumb}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    outline: none;
    cursor: pointer;

    -webkit-appearance: none;

    pointer-events: all;
  }
`;

function CustomRange(): ReactElement {
  const [left, right] = useState<string>();

  return (
    <RangeWrapper>
      <RangeLine/>
        <RangeInput type="range" value={left} min={min} max={max} onChange={value => this.setState({left: value})} />
        <RangeInput type="range" value={right} min={min} max={max} onChange={value => this.setState({right: value})} />
    </RangeWrapper>
  )

}

export default CustomRange;
