import AboutPage from "./About/Page";
import PrivacyPolicyPage from "./PrivacyPolicy/Page";
import LicensingPage from "./Licensing/Page";
import ContactPage from "./Contact/Page";
import Layout from "./common/Layout/Layout";

export default function getStaticRoutes() {
  return [
    {
      element: <Layout />,
      children: [
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicyPage />,
        },
        {
          path: "licensing",
          element: <LicensingPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ];
}
