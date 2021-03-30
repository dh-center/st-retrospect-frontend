import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';

/**
 * Props for years inputs
 */
interface YearsInputsElementProps {
  /**
   * Minimum value
   */
  min: string;

  /**
   * Maximum value
   */
  max: string;
}

const YearsWrapper = styled.div`
  margin-top: 12px;
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
  user-select: none;

  /* Remove arrows in number input field in Webkit */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;

    -webkit-appearance: none;
  }
`;

const YearsDash = styled.span`
  margin: 4px;
`;

/**
 * Years inputs component
 *
 * @param props - properties
 */
function YearsInputs(props: YearsInputsElementProps): ReactElement {
  return (
    <YearsWrapper>
      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.min}
      />

      <YearsDash>
        &ndash;
      </YearsDash>

      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.max}
      />
    </YearsWrapper>
  );
}

export default YearsInputs;
