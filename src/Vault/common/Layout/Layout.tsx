import { Outlet, useParams } from "react-router-dom";
import type { ReactNode } from "react";

import ActionButtons from "../Actions/Actions";

import Navigation from "./Navigation/Navigation";

import CommonLayout from "@/common/Layout/Layout";
import CommonFooter from "@/common/Layout/Footer/Footer";
import CommonHeader from "@/common/Layout/Header/Header";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children = undefined }: LayoutProps) {
  const { "*": splat } = useParams();
  const uuid = splat?.split("/").at(-1);

  return (
    <CommonLayout
      footer={<CommonFooter copyrightClassName="bg-gray-50 border-r" />}
      header={<CommonHeader brandClassName="bg-gray-50 border-r" />}
      outlet={
        <>
          <Navigation className="hidden md:block" />
          <div className="flex flex-col grow overflow-hidden">
            <ActionButtons parent={{ uuid }} />
            {children ?? <Outlet />}
          </div>
        </>
      }
    />
  );
}
