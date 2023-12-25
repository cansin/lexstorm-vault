import { Routes, Route } from "react-router-dom";
import Layout from "./Vault/common/Layout/Layout";
import FourOhFour from "./FourOhFour/FourOhFour";
import Home from "./Vault/Home/Home";
import getStaticRoutes from "./Static/routes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vault" element={<Home />}>
          <Route path="new-folder" element={<Home />} />
          <Route path="all-files" element={<Home />} />
          <Route path="deleted-files" element={<Home />} />
          <Route path=":path" element={<Home />} />
        </Route>
      </Route>
      {getStaticRoutes()}
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}
