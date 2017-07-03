import * as React from 'react';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import { Main } from './containers/main/main';

const App = () => (
  <HashRouter>
    <Main/>
  </HashRouter>
);

// TODO: Add redux stuff

export default App;