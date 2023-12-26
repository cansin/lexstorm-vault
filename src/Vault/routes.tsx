import { Navigate } from "react-router-dom";

import FourOhFourPage from "../FourOhFour/Page";

import AllFilesPage from "./AllFiles/Page";
import FilePage from "./File/Page";
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
            element: <FourOhFourPage />,
          },
          {
            path: "all-files",
            element: <AllFilesPage />,
          },
          {
            path: "deleted-files",
            element: <FourOhFourPage />,
          },
          {
            path: "*",
            element: <FilePage />,
          },
        ],
      },
    ],
  };
}
