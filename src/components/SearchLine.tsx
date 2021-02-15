import { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { sansSerifLight, sansSerifRegular } from '../styles/FontStyles';
import BurgerMenuIcon from '../assets/burger-menu.svg';
import SearchIcon from '../assets/search.svg';
import { useTranslation } from 'react-i18next';
import MenuAsideContext from '../contexts/MenuAsideContext';

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
    color: var(--color-light-gray);
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
 */
function SearchLine(): ReactElement {
  const { t } = useTranslation();
  const { isMenuAsideShow, setMenuAsideShow } = useContext(MenuAsideContext);

  return (
    <SearchLineWrapper>
      <SearchLineMenuButton onClick={() => setMenuAsideShow(!isMenuAsideShow)}/>
      <SearchLineInput placeholder={t('search.inputPlaceholder')}/>
      <SearchLineSearchButton/>
    </SearchLineWrapper>
  );
}

export default SearchLine;
