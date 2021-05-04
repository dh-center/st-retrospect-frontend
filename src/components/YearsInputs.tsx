import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { SearchYearsValues } from '../interfaces/searchForm/SearchYearsValues';

/**
 * Interface of props for search components
 */
export interface YearsInputsProps {
  /**
   * onChange event handler
   *
   * @param values - end values of years
   */
  onChange?: (values: SearchYearsValues) => void;

  /**
   * Current years values
   */
  values: SearchYearsValues;

  /**
   * Minimum year for searching
   */
  min: string;

  /**
   * Maximum year for searching
   */
  max: string;

  /**
   * Is component displaying
   */
  show?: boolean;
}

/**
 * Props of wrapper
 */
interface YearsWrapperProps {
  /**
   * Is component displaying
   */
  show?: boolean
}

const YearsWrapper = styled.div<YearsWrapperProps>`
  margin-top: 12px;

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

const YearsInput = styled.input`
  ${ sansSerifLight };

  position: relative;
  box-sizing: border-box;

  width: 102px;
  height: 36px;

  color: var(--color-dark-gray);

  text-align: center;

  border: .5px solid #F2F2F2;
  border-radius: 2px;
  outline: none;

  transition: background-color .2s ease-in-out,
    border-color .2s ease-in-out;

  /* Remove arrows in number input field in Webkit */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;

    -webkit-appearance: none;
  }

  &:out-of-range {
    border-color: var(--color-red);
    background: var(--color-light-red);
  }
`;

const YearsDash = styled.span`
  margin: 4px;
`;

/**
 * Years inputs component
 *
 * @param props - properties (min and max values of years)
 */
export default function YearsInputs(props: YearsInputsProps): ReactElement {
  return (
    <YearsWrapper show={props.show}>
      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.values.left}
        onChange={event => props.onChange && props.onChange({
          ...props.values,
          left: event.target.value,
        })}
      />

      <YearsDash>
        &ndash;
      </YearsDash>

      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.values.right}
        onChange={event => props.onChange && props.onChange({
          ...props.values,
          right: event.target.value,
        })}
      />
    </YearsWrapper>
  );
}
