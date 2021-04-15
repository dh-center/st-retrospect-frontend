import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import SearchLine from './SearchLine';
import CustomRange from './CustomRange';
import YearsInputs from './YearsInputs';
import { useTranslation } from 'react-i18next';
import useDebounce from '../lib/useDebounce';

const SearchLineWithMarginBottom = styled(SearchLine)`
  margin-bottom: 12px;
`;

/**
 * Search form component
 */
export default function SearchForm(): ReactElement {
  const { t } = useTranslation();

  const YEARS_MIN_VALUE = '1500';
  const YEARS_MAX_VALUE = '2021';

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
    left: YEARS_MIN_VALUE,
    right: YEARS_MAX_VALUE,
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
        min={YEARS_MIN_VALUE}
        max={YEARS_MAX_VALUE}
        values={years}
        label={t(`customRange.years`)}
      />
      <YearsInputs
        onChange={values => setYearsFromInputs(values)}
        min={YEARS_MIN_VALUE}
        max={YEARS_MAX_VALUE}
        values={yearsFromInputs}
      />
    </form>
  );
}
