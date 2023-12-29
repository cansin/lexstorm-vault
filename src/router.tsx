import { createBrowserRouter } from "react-router-dom";

import getStaticRoutes from "./Static/routes";
import getVaultRoutes from "./Vault/routes";
import FourOhFourPage from "./FourOhFour/Page";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      ...getStaticRoutes(),
      ...getVaultRoutes(),
      { path: "*", element: <FourOhFourPage /> },
    ],
  },
]);
