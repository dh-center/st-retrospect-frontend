import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import SearchLine from './SearchLine';
import CustomRange from './CustomRange';
import YearsInputs from './YearsInputs';
import { useTranslation } from 'react-i18next';
import { SearchProps } from '../interfaces/SearchProps';
import { SearchYearsValues } from '../interfaces/SearchYearsValues';

const SearchWrapper = styled.div``;

const SearchLineWithMarginBottom = styled(SearchLine)`
  margin-bottom: 12px;
`;

/**
 * Search form component
 *
 * @param props - properties (min and max range values)
 */
function SearchForm(props: SearchProps): ReactElement {
  const { t } = useTranslation();
  const [values, setValues] = useState<SearchYearsValues>({ left: props.left,
    right: props.right });

  return (
    <SearchWrapper>
      <SearchLineWithMarginBottom/>
      <CustomSelect/>

      <CustomRange
        onChange={
          (value) => {
            setValues({
              left: value.left,
              right: value.right,
            });
          }
        }
        min={props.min}
        max={props.max}
        left={values.left}
        right={values.right}
        label={t(`customRange.years`)}
      />

      <YearsInputs
        onChange={
          (value) => {
            setValues({
              left: value.left,
              right: value.right,
            });
          }
        }
        max={props.max}
        min={props.min}
        right={values.right}
        left={values.left}
      />
    </SearchWrapper>
  );
}

export default SearchForm;
