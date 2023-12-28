import { Outlet, ScrollRestoration } from "react-router-dom";
import type { ReactNode } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface CommonLayoutProps {
  footer?: ReactNode;
  header?: ReactNode;
  outlet?: ReactNode;
}

export default function CommonLayout({
  footer = undefined,
  header = undefined,
  outlet = undefined,
}: CommonLayoutProps) {
  return (
    <div className="flex grow flex-col overflow-y-hidden">
      {header ?? <Header />}
      <div className="flex grow overflow-y-auto overflow-x-hidden">
        {outlet ?? <Outlet />}
      </div>
      {footer ?? <Footer />}
      <ScrollRestoration />
    </div>
  );
}
