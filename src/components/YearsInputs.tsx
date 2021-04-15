import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { YearsInputsElementProps } from '../interfaces/searchForm/YearsInputsElementProps';

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
 * @param props - properties (min and max values of years)
 */
export default function YearsInputs(props: YearsInputsElementProps): ReactElement {
  return (
    <YearsWrapper>
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
