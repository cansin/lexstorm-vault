import { Outlet } from "react-router-dom";
import Navigation from "../Home/Navigation/Navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="flex grow flex-col overflow-y-hidden">
      <Header />
      <div className="flex grow overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
