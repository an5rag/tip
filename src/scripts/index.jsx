import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

const rootElement = document.getElementById('root');
const render = (Component) =>
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
    module.hot.accept('./app', () => {
        render(App);
    });
}