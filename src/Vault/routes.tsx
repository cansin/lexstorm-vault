import { Navigate } from "react-router-dom";

import FourOhFour from "../FourOhFour/FourOhFour";

import AllFiles from "./AllFiles/AllFiles";
import Layout from "./common/Layout/Layout";

export default function getVaultRoutes() {
  return {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/vault/all-files" replace={true} />,
      },
      {
        path: "vault",
        children: [
          {
            index: true,
            element: <Navigate to="all-files" replace={true} />,
          },
          {
            path: "new-folder",
            element: <FourOhFour />,
          },
          {
            path: "all-files",
            element: <AllFiles />,
          },
          {
            path: "deleted-files",
            element: <FourOhFour />,
          },
          {
            path: ":path",
            element: <FourOhFour />,
          },
        ],
      },
    ],
  };
}
