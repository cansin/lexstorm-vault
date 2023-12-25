import { Navbar } from "flowbite-react";
import UserDropdown from "./UserDropdown";
import SearchForm from "./SearchForm";
import Brand from "./Brand";

export default function HeaderContent() {
  return (
    <Navbar fluid className="py-0 sm:pl-0">
      <Brand />
      <SearchForm />
      <UserDropdown />
    </Navbar>
  );
}
