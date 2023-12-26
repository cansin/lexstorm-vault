import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function CommonLayout({ footer, header, outlet }) {
  return (
    <div className="flex grow flex-col overflow-y-hidden">
      {header ?? <Header />}
      <div className="flex grow overflow-y-auto">{outlet ?? <Outlet />}</div>
      {footer ?? <Footer />}
      <ScrollRestoration />
    </div>
  );
}
