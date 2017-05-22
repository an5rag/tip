import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );
render(App);

// check if HMR is enabled
if (module.hot) {
    // accept update of dependency
    module.hot.accept('./App', () => {
        render(App);
    });
}