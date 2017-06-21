import * as React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Main } from './containers/main/main';

const App = () => (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);

// TODO: Add redux stuff

export default App;