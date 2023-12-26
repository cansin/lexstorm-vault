import { Outlet } from "react-router-dom";
import CommonLayout from "../../../common/Layout/Layout";

export default function Layout() {
  return (
    <CommonLayout
      outlet={
        <main className="px-12 py-8 mx-auto max-w-7xl">
          <article className="format dark:format-invert max-w-full pb-8">
            <Outlet />
          </article>
        </main>
      }
    />
  );
}
