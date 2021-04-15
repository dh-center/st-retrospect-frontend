import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import SearchLine from './SearchLine';
import CustomRange from './CustomRange';
import YearsInputs from './YearsInputs';
import { useTranslation } from 'react-i18next';
import { SearchYearsRange } from '../interfaces/searchForm/SearchYearsRange';
import useDebounce from '../lib/useDebounce';

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

  /**
   * Text query for search
   */
  const [query, setQuery] = useState('');

  /**
   * Categories for search
   */
  const [categories, setCategories] = useState<string[]>([]);

  /**
   * Years period for search
   */
  const [years, setYears] = useState({
    left: props.min,
    right: props.max,
  });

  const [yearsFromInputs, setYearsFromInputs] = useState(years);

  const yearsFromInputsWithDebounce = useDebounce(yearsFromInputs, 400);

  /**
   * Set years to inputs from range instantly
   */
  useEffect(() => setYearsFromInputs(years), [ years ]);

  /**
   * Set years from inputs to range after debounce timeout
   */
  useEffect(() => setYears(yearsFromInputsWithDebounce), [ yearsFromInputsWithDebounce ]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify({
          query,
          categories,
          years,
        }));
      }}
    >
      <SearchLineWithMarginBottom
        value={query}
        onChange={value => setQuery(value)}
      />

      <CustomSelect
        selected={categories}
        onChange={values => setCategories(values)}
      />

      <CustomRange
        onChange={values => setYears(values)}
        min={props.min}
        max={props.max}
        values={years}
        label={t(`customRange.years`)}
      />

      <YearsInputs
        onChange={values => setYearsFromInputs(values)}
        max={props.max}
        min={props.min}
        values={yearsFromInputs}
      />
    </form>
  );
}

export default SearchForm;
