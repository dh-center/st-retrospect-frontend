import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import SearchLine from './SearchLine';
import CustomRange from './CustomRange';
import YearsInputs from './YearsInputs';
import { useTranslation } from 'react-i18next';
import { SearchYearsValues } from '../interfaces/SearchYearsValues';
import { SearchYearsRange } from '../interfaces/SearchYearsRange';

const SearchWrapper = styled.div``;

const SearchLineWithMarginBottom = styled(SearchLine)`
  margin-bottom: 12px;
`;

/**
 * Search form component
 *
 * @param props - properties (min and max range values)
 */
function SearchForm(props: SearchYearsRange): ReactElement {
  const { t } = useTranslation();
  const [currentYearsValues, setCurrentYearsValues] = useState<SearchYearsValues>({ left: props.min,
    right: props.max });

  return (
    <SearchWrapper>
      <SearchLineWithMarginBottom/>
      <CustomSelect/>

      <CustomRange
        onChange={
          (value) => {
            setCurrentYearsValues({
              left: value.left,
              right: value.right,
            });
          }
        }
        min={props.min}
        max={props.max}
        left={currentYearsValues.left}
        right={currentYearsValues.right}
        label={t(`customRange.years`)}
      />

      <YearsInputs
        onChange={
          (value) => {
            setCurrentYearsValues({
              left: value.left,
              right: value.right,
            });
          }
        }
        max={props.max}
        min={props.min}
        right={currentYearsValues.right}
        left={currentYearsValues.left}
      />
    </SearchWrapper>
  );
}

export default SearchForm;
