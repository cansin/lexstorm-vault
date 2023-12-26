import { createBrowserRouter } from "react-router-dom";

import getStaticRoutes from "../Static/routes";
import getVaultRoutes from "../Vault/routes";
import FourOhFour from "../FourOhFour/FourOhFour";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      getStaticRoutes(),
      getVaultRoutes(),
      { path: "*", element: <FourOhFour /> },
    ],
  },
]);
