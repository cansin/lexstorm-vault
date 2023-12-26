import About from "./About/About";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Licensing from "./Licensing/Licensing";
import Contact from "./Contact/Contact";
import Layout from "./common/Layout/Layout";

export default function getStaticRoutes() {
  return {
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "licensing",
        element: <Licensing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  };
}
