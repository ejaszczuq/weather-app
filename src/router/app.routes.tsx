import { RouteObject } from "react-router-dom";

import MainPage from "../app/Main/Main";
import NotFound from "../app/NotFound/NotFound";

export const appRoutes: RouteObject = {
  children: [
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
};
