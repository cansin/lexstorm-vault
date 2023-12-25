import About from "./About/About";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Licensing from "./Licensing/Licensing";
import Contact from "./Contact/Contact";
import Layout from "./common/Layout/Layout";
import { Route } from "react-router-dom";

export default function getStaticRoutes() {
  return (
    <Route element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="licensing" element={<Licensing />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  );
}
