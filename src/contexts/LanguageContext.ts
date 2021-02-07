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

interface LanguageContextProps {
  userLanguage: AvailableLanguages,
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
