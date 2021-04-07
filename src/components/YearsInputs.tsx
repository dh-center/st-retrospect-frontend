import { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import { YearsInputsElementProps } from '../interfaces/YearsInputsElementProps';
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
 * @param props - properties (min and max values of years)
 */
function YearsInputs(props: YearsInputsElementProps): ReactElement {
  const onChange = props.onChange;
  const [currentYearsValues, setCurrentYearsValues] = useState<SearchYearsValues>({ left: props.left,
    right: props.right });
  let rangeUpdateTimeout: NodeJS.Timeout;

  /**
   * To change the digits of the input numbers after moving range sliders
   * because inputs depends from state variables
   */
  useEffect(() => {
    setCurrentYearsValues({
      left: props.left,
      right: props.right,
    });
  }, [props.left, props.right]);

  useEffect(() => {
    if ((props.left !== currentYearsValues.left) || (props.right !== currentYearsValues.right)) {
      rangeUpdateTimeout = setTimeout(() => {
        if (onChange) {
          onChange({
            left: currentYearsValues.left,
            right: currentYearsValues.right,
          });
        }
      }, 500);
    }
  }, [ currentYearsValues ]);

  /**
   * Effect works after state updating
   * Then verifies, that this change was not due to changing of props,
   * wait some time and update form state (call onChange)
   */
  // useEffect(() => {
  //   if ((props.left !== currentYearsValues.left) || (props.right !== currentYearsValues.right)) {
  //     onChange && debounce(
  //       () => onChange({
  //         left: currentYearsValues.left,
  //         right: currentYearsValues.right,
  //       }),
  //       1000
  //     )();
  //   }
  // }, [ currentYearsValues ]);

  // useEffect(() => {
  //   if ((props.left !== currentYearsValues.left) || (props.right !== currentYearsValues.right)) {
  //     onChange && throttle(
  //       () => onChange({
  //         left: currentYearsValues.left,
  //         right: currentYearsValues.right,
  //       }),
  //       1000
  //     )();
  //   }
  // }, [ currentYearsValues ]);

  return (
    <YearsWrapper>
      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={currentYearsValues.left}
        onChange={(value) => {
          setCurrentYearsValues({
            left: value.target.value,
            right: currentYearsValues.right,
          });
          clearTimeout(rangeUpdateTimeout);
        }}
      />

      <YearsDash>
        &ndash;
      </YearsDash>

      <YearsInput
        type="number"
        min={props.min}
        max={props.max}
        value={currentYearsValues.right}
        onChange={(value) => {
          setCurrentYearsValues({
            left: currentYearsValues.left,
            right: value.target.value,
          });
          clearTimeout(rangeUpdateTimeout);
        }}
      />
    </YearsWrapper>
  );
}

export default YearsInputs;
