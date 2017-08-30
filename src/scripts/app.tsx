import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Main } from './containers/main/main';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/root-reducer';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>
);

// TODO: Add redux stuff

export default App;