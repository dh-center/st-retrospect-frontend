import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { sansSerifLight } from '../styles/FontStyles';
import LeftArrowIcon from '../assets/arrow-left.svg';
import CheckboxIcon from '../assets/checkbox.svg';
import CheckboxCheckedIcon from '../assets/checkbox-checked.svg';
import CrossIcon from '../assets/cross.svg';
import { useTranslation } from 'react-i18next';
import WithClassName from '../interfaces/WithClassName';

/**
 * Props for custom select elements
 */
interface CustomSelectElementProps {
  /**
   * Is custom select open
   */
  isOpen: boolean;
}

/**
 * This element needs for displaying select over next elements
 */
const SelectPlaceholder = styled.div`
  position: relative;

  height: 34px;
  width: 100%;
`;

const SelectWrapper = styled.div<CustomSelectElementProps>`
  position: absolute;

  width: 100%;

  ${ sansSerifLight };
  font-size: 14px;
  color: var(--color-dark-gray);
  user-select: none;

  box-shadow: var(${ props => props.isOpen ? '--shadow-medium' : '--shadow-base' });
  border-radius: 2px;
  z-index: 1;
`;

const SelectInput = styled.div<CustomSelectElementProps>`
  display: flex;
  align-items: center;

  padding: 5px 12px;

  cursor: pointer;

  &::after {
    height: 24px;
    width: 24px;

    display: block;
    content: '';
    background-image: url("${LeftArrowIcon}");
    background-position: center center;
    background-repeat: no-repeat;

    transform: rotate(${ props => props.isOpen ? '90deg' : '-90deg' });
  }
`;

const SelectInputText = styled.div`
  flex: 1;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SelectDropdown = styled.ul<CustomSelectElementProps>`
  display: ${ props => props.isOpen ? 'block' : 'none' };

  padding: 0;
  margin: 0;
  list-style-type: none;
  background: var(--color-white);
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  border-top: .5px solid var(--color-light-gray);
  padding: 10px 12px;

  cursor: pointer;
`;

/**
 * Props of select item element
 */
interface SelectItemProps {
  /**
   * Is item selected
   */
  selected: boolean;
}

const SelectItem = styled(ListItem)<SelectItemProps>`
  &::before {
    flex-shrink: 0;

    height: 16px;
    width: 16px;

    display: block;
    content: '';
    background-image: url("${ props => props.selected ? CheckboxCheckedIcon : CheckboxIcon }");
    background-size: cover;

    margin-right: 8px;
  }

  &:hover {
    background: var(--color-light-blue);
  }
`;

const SelectItemText = styled.span`
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SelectResetText = styled.span`
  display: inline-flex;
  align-items: center;

  padding-right: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-gray);
  color: var(--color-gray);

  &::before {
    height: 16px;
    width: 16px;

    content: '';
    background-image: url("${CrossIcon}");
    background-size: cover;
  }
`;

/**
 * Custom select component
 *
 * @param props - props of component
 */
function CustomSelect(props: WithClassName): ReactElement {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const options = ['писатель', 'художник', 'скульптор', 'водитель', 'алкоголик', 'хто я?'];

  const SelectItems = options.map((option, key) => {
    return (
      <SelectItem
        selected={selected.includes(option)}
        onClick={() => {
          if (selected.includes(option)) {
            const index = selected.indexOf(option);

            setSelected(selected.slice(0, index).concat(selected.slice(index + 1)));
          } else {
            setSelected(selected.concat(option));
          }
        }}
        key={key}
      >
        <SelectItemText>{option}</SelectItemText>
      </SelectItem>
    );
  });

  return (
    <SelectPlaceholder className={props.className}>
      <SelectWrapper isOpen={isOpen}>
        <SelectInput onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
          <SelectInputText>{
            selected.length ? selected.join(', ') : t('customSelect.placeholder')
          }</SelectInputText>
        </SelectInput>
        <SelectDropdown isOpen={isOpen}>
          {SelectItems}
          <ListItem onClick={() => setSelected([])}>
            <SelectResetText>{t('customSelect.reset')}</SelectResetText>
          </ListItem>
        </SelectDropdown>
      </SelectWrapper>
    </SelectPlaceholder>
  );
}

export default CustomSelect;
