import { Navbar } from "flowbite-react";
import UserDropdown from "./UserDropdown";
import SearchForm from "./SearchForm";

export default function HeaderContent() {
  return (
    <Navbar fluid>
      <UserDropdown />
      <SearchForm />
    </Navbar>
  );
}
