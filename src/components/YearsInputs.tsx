import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { SearchProps } from '../interfaces/SearchProps';
import { SearchYearsValues } from '../interfaces/SearchYearsValues';

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
 * @param props - properties
 */
function YearsInputs(props: SearchProps): ReactElement {
  const onChange = props.onChange;
  const [ values ] = useState<SearchYearsValues>({ left: props.min,
    right: props.max });

  return (
    <YearsWrapper>
      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={props.min }
        onChange={value => {
          const oldValue = values.left;

          if (onChange && (value.target.value > values.right)) {
            onChange({
              left: oldValue,
              right: values.right,
            });
          } else if (onChange) {
            onChange({
              left: values.left,
              right: values.right,
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
        value={props.max}
        onChange={(value) => {
          const oldValue = values.right;

          if (onChange && (value.target.value < values.left)) {
            onChange({
              left: values.left,
              right: oldValue,
            });
          } else if (onChange) {
            onChange({
              left: values.left,
              right: value.target.value,
            });
          }
        }}
      />
    </YearsWrapper>
  );
}

export default YearsInputs;
