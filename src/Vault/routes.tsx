import { Navigate } from "react-router-dom";

import FourOhFourPage from "../FourOhFour/Page";

import AllFilesPage from "./AllFiles/Page";
import Layout from "./common/Layout/Layout";
import FolderPage from "./Folder/Page";
import FilePage from "./File/Page";

export default function getVaultRoutes() {
  return [
    {
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
              path: "folder/*",
              element: <FolderPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/vault/file/*",
      element: <FilePage />,
    },
  ];
}
