import { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { sansSerifLight, sansSerifRegular } from '../styles/FontStyles';
import BurgerMenuIcon from '../assets/burger-menu.svg';
import SearchIcon from '../assets/search.svg';
import { useTranslation } from 'react-i18next';
import MenuAsideContext from '../contexts/MenuAsideContext';
import WithClassName from '../interfaces/WithClassName';

/**
 * Search line props
 */
interface SearchLineProps extends WithClassName {
  /**
   * Current value of input
   */
  value: string;

  /**
   * onChange event handler
   *
   * @param value - new input value
   */
  onChange: (value: string) => void;
}

const SearchLineWrapper = styled.div`
  display: flex;
  align-items: center;

  background: var(--color-white);
  border-radius: 2px;
  box-shadow: var(--shadow-base);
  padding: 12px;
`;

const SearchLineInput = styled.input`
  width: 100%;

  background: transparent;
  outline: none;
  border: none;
  padding: 3px 2px;
  margin: 0 12px;

  ${ sansSerifRegular };
  font-size: 14px;
  color: var(--color-dark-gray);

  &::placeholder {
    ${ sansSerifLight };
    color: var(--color-gray);
  }
`;

const SearchLineButton = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  background: transparent;

  cursor: pointer;
`;

const SearchLineMenuButton = styled(SearchLineButton)`
  background-image: url("${BurgerMenuIcon}");
  background-size: cover;
`;

const SearchLineSearchButton = styled(SearchLineButton)`
  background-image: url("${SearchIcon}");
  background-size: cover;
`;

/**
 * Search line with menu button
 *
 * @param props - props of component
 */
function SearchLine(props: SearchLineProps): ReactElement {
  const { t } = useTranslation();
  const { isMenuAsideShow, setMenuAsideShow } = useContext(MenuAsideContext);

  return (
    <SearchLineWrapper className={props.className}>
      <SearchLineMenuButton type={'button'} onClick={() => setMenuAsideShow(!isMenuAsideShow)}/>
      <SearchLineInput
        placeholder={t('search.inputPlaceholder')}
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
      <SearchLineSearchButton/>
    </SearchLineWrapper>
  );
}

export default SearchLine;
