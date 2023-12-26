import Layout from "./common/Layout/Layout";
import Home from "./Home/Home";

export default function getVaultRoutes() {
  return {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "vault",
        children: [
          {
            path: "new-folder",
            element: <Home />,
          },
          {
            path: "all-files",
            element: <Home />,
          },
          {
            path: "deleted-files",
            element: <Home />,
          },
          {
            path: ":path",
            element: <Home />,
          },
        ],
      },
    ],
  };
}