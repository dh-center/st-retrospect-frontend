import { ReactElement, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { sansSerifLight } from '../styles/FontStyles';
import { YearsInputsElementProps } from '../interfaces/searchForm/YearsInputsElementProps';
import { SearchYearsValues } from '../interfaces/searchForm/SearchYearsValues';

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
  const updateRange = useCallback(
    () => debounce(
      () => onChange && onChange(normalizeValues(currentYearsValues)),
      500)(),
    []
  );

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
    updateRange();
  }, [ currentYearsValues ]);

  function normalizeValues (values: SearchYearsValues): SearchYearsValues {
    if (values.right < values.left) {
      return {
        left: values.left,
        right: (Number(values.left) + 1).toString(),
      };
    } else if (values.left > values.right) {
      return {
        left: (Number(values.right) - 1).toString(),
        right: values.right,
      };
    } else {
      return values;
    }
  }

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
        }}
      />
    </YearsWrapper>
  );
}

export default YearsInputs;
