import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import RangeThumb from '../assets/range-thumb.svg';
import { sansSerifLight } from '../styles/FontStyles';
import { useTranslation } from 'react-i18next';

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

  /**
   * Label for range input
   */
  label?: string;
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

  height: 47px;
  margin: 24px -6px 12px;

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

/**
 * Custom range component
 *
 * @param props - properties (min and max range values)
 */
function CustomRange(props: CustomRangeElementProps): ReactElement {
  const { t } = useTranslation();
  const [values, setValues] = useState<RangeValues>({ left: props.min,
    right: props.max });

  return (
    <RangeWrapper>

      <RangeLabel>
        { props.label && t(`customRange.${props.label}`) }
      </RangeLabel>

      <RangeLine/>

      <RangeInput
        type="range"
        value={values.left}
        min={props.min}
        max={props.max}
        onChange={value => {
          if (value.target.value > values.right) {
            setValues({ left: values.right,
              right: value.target.value });
          } else {
            setValues({ left: value.target.value,
              right: values.right });
          }
        }
        }
      />

      <RangeInput
        type="range"
        value={values.right}
        min={props.min}
        max={props.max}
        onChange={value => {
          if (value.target.value < values.left) {
            setValues({ left: value.target.value,
              right: values.left });
          } else {
            setValues({ left: values.left,
              right: value.target.value });
          }
        }
        }
      />

    </RangeWrapper>
  );
}

export default CustomRange;
