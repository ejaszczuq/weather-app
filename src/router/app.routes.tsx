import { Outlet, RouteObject } from 'react-router-dom';

import { WeatherProvider } from '../contexts/WeatherContext';

import MainPage from '../app/Main/Main';
import NotFound from '../app/NotFound/NotFound';

export const appRoutes: RouteObject = {
   element: (
      <WeatherProvider>
         <Outlet />
      </WeatherProvider>
   ),
   children: [
      {
         path: '/',
         element: <MainPage />,
      },
      {
         path: '*',
         element: <NotFound />,
      },
   ],
};
