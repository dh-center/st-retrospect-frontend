import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import SearchLine from './SearchLine';
import CustomRange from './CustomRange';
import YearsInputs from './YearsInputs';
import { useTranslation } from 'react-i18next';
import { SearchYearsRange } from '../interfaces/searchForm/SearchYearsRange';
import { SearchFormState } from '../interfaces/searchForm/SearchFormState';

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
  const [currentValues, setCurrentValues] = useState<SearchFormState>({
    query: '',
    filters: {
      categories: [],
      years: {
        left: props.min,
        right: props.max
      }
    }
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(currentValues));
      }}
    >
      <SearchLineWithMarginBottom/>

      <CustomSelect
        onChange={
          (values) => {
            setCurrentValues({
              query: '',
              filters: {
                categories: values,
                years: {
                  left: currentValues.filters.years.left,
                  right: currentValues.filters.years.right,
                }
              }
            });
          }
        }
      />

      <CustomRange
        onChange={
          (value) => {
            setCurrentValues({
              query: '',
              filters: {
                categories: currentValues.filters.categories,
                years: {
                  left: value.left,
                  right: value.right,
                }
              }
            });
          }
        }
        min={props.min}
        max={props.max}
        left={currentValues.filters.years.left}
        right={currentValues.filters.years.right}
        label={t(`customRange.years`)}
      />

      <YearsInputs
        onChange={
          (value) => {
            setCurrentValues({
              query: '',
              filters: {
                categories: currentValues.filters.categories,
                years: {
                  left: value.left,
                  right: value.right,
                }
              }
            });
          }
        }
        max={props.max}
        min={props.min}
        left={currentValues.filters.years.left}
        right={currentValues.filters.years.right}
      />
    </form>
  );
}

export default SearchForm;
