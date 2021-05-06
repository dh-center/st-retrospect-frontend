import React from 'react';

/**
 * Available interface languages
 */
export enum AvailableLanguages {
  /**
   * Russian
   */
  RU='RU',

  /**
   * English
   */
  EN='EN'
}

/**
 * Props of language context
 */
interface LanguageContextProps {
  /**
   * Current interface language
   */
  userLanguage: AvailableLanguages,

  /**
   * Setter for current interface language
   *
   * @param language - new language
   */
  setUserLanguage: (language: AvailableLanguages) => void
}

/**
 * Context with interface language
 */
const LanguageContext = React.createContext<LanguageContextProps>({
  userLanguage: AvailableLanguages.RU,
  setUserLanguage: language => {
    return language;
  },
});

export default LanguageContext;
