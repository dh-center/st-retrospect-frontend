import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import HomeView from './views/HomeView';
import { Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

/**
 * Main component of the application
 */
function App(): ReactElement {
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Route path="/">
          <HomeView/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
