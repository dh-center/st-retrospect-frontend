import { ReactElement, useContext } from 'react';
import styled, { css } from 'styled-components';
import LanguageContext, { AvailableLanguages } from '../contexts/LanguageContext';
import { sansSerifLight, sansSerifRegular } from '../styles/FontStyles';

const SwitchWrapper = styled.div`
  display: flex;

  ${ sansSerifLight };
  text-transform: uppercase;
  font-size: 12px;
  color: var(--color-gray);
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
  const { userLanguage, setUserLanguage } = useContext(LanguageContext);

  return (
    <SwitchWrapper>
      <SwitchButton
        isActive={userLanguage === AvailableLanguages.EN}
        onClick={() => setUserLanguage(AvailableLanguages.EN)}
      >En</SwitchButton>
      <SwitchButton
        isActive={userLanguage === AvailableLanguages.RU}
        onClick={() => setUserLanguage(AvailableLanguages.RU)}
      >Ru</SwitchButton>
    </SwitchWrapper>
  );
}

export default LanguageSwitch;
