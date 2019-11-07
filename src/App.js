import React, { Fragment } from 'react';
import GlobalStyle from './global.styles';

import AppRoutes from './routes';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  );
}

export default App;
