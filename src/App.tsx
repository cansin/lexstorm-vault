import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout/Layout";
import FourOhFour from "./FourOhFour/FourOhFour";
import Home from "./Home/Home";
import getStaticRoutes from "./Static/routes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {getStaticRoutes()}
        <Route path="*" element={<FourOhFour />} />
      </Route>
    </Routes>
  );
}
