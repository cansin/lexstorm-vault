import { Navbar } from "flowbite-react";
import UserDropdown from "./UserDropdown";
import SearchForm from "./SearchForm";
import Brand from "./Brand";
import { twMerge } from "tailwind-merge";

export default function CommonHeader({ brandClassName }) {
  return (
    <Navbar fluid className="p-0 pr-4 sm:pl-0">
      <Brand className={twMerge("w-64 pl-3 py-5 ", brandClassName)} />
      <SearchForm />
      <UserDropdown />
    </Navbar>
  );
}
