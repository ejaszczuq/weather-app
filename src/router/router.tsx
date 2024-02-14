import { BrowserRouter, useRoutes } from 'react-router-dom';

import { appRoutes } from './app.routes';

const Routes = () => useRoutes([appRoutes]);

export const Router = () => (
   <BrowserRouter>
      <Routes />
   </BrowserRouter>
);
