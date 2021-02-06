import React, { ReactElement } from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import ColorVariables from './styles/ColorVariables';

/**
 * Main component of the application
 */
function App(): ReactElement {
  return (
    <>
      <ColorVariables/>
      <GlobalStyles/>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
