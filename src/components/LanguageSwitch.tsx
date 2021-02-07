import {ReactElement, useState} from 'react';
import styled, {css} from 'styled-components';
import {sansSerifLight, sansSerifRegular} from '../styles/FontStyles';

const SwitchWrapper = styled.div`
  display: flex;

  ${ sansSerifLight };
  text-transform: uppercase;
  font-size: 12px;
  color: var(--color-light-gray);
`;

/**
 * Props of switch buttons
 */
interface SwitchButtonProps {
  /**
   * Is button active
   */
  isActive: boolean;
}

const SwitchButton = styled.div<SwitchButtonProps>`
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  cursor: pointer;

  ${ props => {
    if (props.isActive) {
      return css`
        background: var(--color-dark-gray);

        ${ sansSerifRegular };
        color: var(--color-white);
      `;
    } else {
      /**
       * Add hover behavior only on inactive button
       */
      return css`
        &:hover {
          ${ sansSerifRegular };
          color: var(--color-dark-gray);

          border: 0.5px solid var(--color-dark-gray);
        }
      `;
    }
  }}
`;

/**
 * Language switch component
 */
function LanguageSwitch(): ReactElement {
  const [currentLanguage, setCurrentLanguage] = useState<'en'|'ru'>('ru');

  return (
    <SwitchWrapper>
      <SwitchButton isActive={currentLanguage === 'en'} onClick={() => setCurrentLanguage('en')}>En</SwitchButton>
      <SwitchButton isActive={currentLanguage === 'ru'} onClick={() => setCurrentLanguage('ru')}>Ru</SwitchButton>
    </SwitchWrapper>
  );
}

export default LanguageSwitch;
