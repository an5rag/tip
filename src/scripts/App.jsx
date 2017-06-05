import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Main } from 'containers/main/main';

const App = () => (
  <BrowserRouter basename="/tip">
    <Main/>
  </BrowserRouter>
);

// TODO: Add redux stuff

export default App;