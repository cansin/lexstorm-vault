import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import FourOhFour from "./FourOhFour/FourOhFour";
import Home from "./Home/Home";
import About from "./About/About";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Licensing from "./Licensing/Licensing";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="licensing" element={<Licensing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
}
