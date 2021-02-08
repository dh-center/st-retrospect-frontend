import React, {ReactElement, useState} from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import ColorVariables from './styles/ColorVariables';
import ShadowVariables from './styles/ShadowVariables';
import LanguageContext, {AvailableLanguages} from './contexts/LanguageContext';
import {useTranslation} from 'react-i18next';

/**
 * Main component of the application
 */
function App(): ReactElement {
  const [userLanguage, setUserLanguage] = useState<AvailableLanguages>(AvailableLanguages.RU);
  const {i18n} = useTranslation();

  return (
    <>
      <LanguageContext.Provider value={{
        userLanguage,
        setUserLanguage: async (value) => {
          await i18n.changeLanguage(value);
          setUserLanguage(value);
        },
      }}>
        <ColorVariables/>
        <ShadowVariables/>
        <GlobalStyles/>
        <Switch>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
