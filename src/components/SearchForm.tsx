import { ReactElement, useEffect, useState, Suspense } from 'react';
import styled, { css } from 'styled-components';
import { SelectPlaceholder } from './customSelects/CustomSelect';
import SearchLine from './SearchLine';
import CustomRange from './CustomRange';
import YearsInputs from './YearsInputs';
import { useTranslation } from 'react-i18next';
import useDebounce from '../lib/useDebounce';
import { useHistory } from 'react-router-dom';
import TagsCustomSelect from './customSelects/TagsCustomSelect';
import Loader from './Loader';
import useQuery from '../lib/useQuery';

/**
 * Props of component
 */
interface SearchFormProps {
  /**
   * Is search form displaying all inputs
   */
  isSearchFormOpen: boolean;
}

const SearchLineWithMarginBottom = styled(SearchLine)<SearchFormProps>`
  margin-bottom: ${ props => props.isSearchFormOpen ? '12px' : '0' };
  transition: margin ease-in-out .2s;
`;

/**
 * Props of element
 */
interface HideWrapperProps {
  /**
   * Is element displaying
   */
  show: boolean;
}

const HideWrapper = styled.div<HideWrapperProps>`
  ${props => {
    if (!props.show) {
      return css`
        height: 0;
        visibility: hidden;
        overflow: hidden;
      `;
    }
  }};
  opacity: ${ props => props.show ? '1' : '0' };
  transition: all ease-in-out .2s;
`;

/**
 * Search form component
 *
 * @param props - props of component
 */
export default function SearchForm(props: SearchFormProps): ReactElement {
  const { t } = useTranslation();
  const history = useHistory();
  const urlQuery = useQuery();

  const YEARS_MIN_VALUE = '1500';
  const YEARS_MAX_VALUE = '2021';

  /**
   * Text query for search
   */
  const [query, setQuery] = useState(urlQuery.get('query') || '');

  /**
   * Categories for search
   */
  const categoriesFromQuery = urlQuery.get('categories');
  const [categoriesIds, setCategoriesIds] = useState<string[]>(categoriesFromQuery ? categoriesFromQuery.split(',') : []);

  /**
   * Years period for search
   */
  const [years, setYears] = useState({
    left: urlQuery.get('startYear') || YEARS_MIN_VALUE,
    right: urlQuery.get('endYear') || YEARS_MAX_VALUE,
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
      onSubmit={(event) => {
        event.preventDefault();
        history.push({
          pathname: '/',
          search: `?query=${query}&startYear=${years.left}&endYear=${years.right}&categories=${categoriesIds.join(',')}`,
        });
      }}
    >
      <SearchLineWithMarginBottom
        value={query}
        onChange={value => setQuery(value)}
        isSearchFormOpen={props.isSearchFormOpen}
      />
      <HideWrapper show={props.isSearchFormOpen}>
        <Suspense fallback={
          <SelectPlaceholder>
            <Loader/>
          </SelectPlaceholder>
        }>
          <TagsCustomSelect
            selectedIds={categoriesIds}
            onChange={values => setCategoriesIds(values)}
          />
        </Suspense>
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
      </HideWrapper>
    </form>
  );
}
