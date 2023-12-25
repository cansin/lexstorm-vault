import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="px-12 py-8 mx-auto max-w-7xl">
      <article className="format dark:format-invert max-w-full pb-8">
        <Outlet />
      </article>
    </main>
  );
}
