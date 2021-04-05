import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { YearsInputsElementProps } from '../interfaces/YearsInputsElementProps';

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
function YearsInputs(props: YearsInputsElementProps): ReactElement {
  const onChange = props.onChange;

  return (
    <YearsWrapper>
      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.left}
        onChange={(value) => {
          if (!onChange) {
            return;
          }

          if (value.target.value > props.right) {
            onChange({
              left: props.left,
              right: props.right,
            });
          } else {
            onChange({
              left: props.left,
              right: props.right,
            });
          }
        }}
      />

      <YearsDash>
        &ndash;
      </YearsDash>

      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.right}
        onChange={(value) => {
          if (!onChange) {
            return;
          }

          if (value.target.value < props.left) {
            onChange({
              left: props.left,
              right: props.right,
            });
          } else {
            onChange({
              left: props.left,
              right: value.target.value,
            });
          }
        }}
      />
    </YearsWrapper>
  );
}

export default YearsInputs;
