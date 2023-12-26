import { Outlet } from "react-router-dom";

import CommonLayout from "../../../common/Layout/Layout";
import CommonFooter from "../../../common/Layout/Footer/Footer";
import CommonHeader from "../../../common/Layout/Header/Header";

import Navigation from "./Navigation/Navigation";

export default function Layout() {
  return (
    <CommonLayout
      footer={<CommonFooter copyrightClassName="bg-gray-50 border-r" />}
      header={<CommonHeader brandClassName="bg-gray-50 border-r" />}
      outlet={
        <>
          <Navigation />
          <Outlet />
        </>
      }
    />
  );
}
