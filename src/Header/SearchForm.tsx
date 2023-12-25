import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

export default function SearchForm() {
  return (
    <form className="w-2/4">
      <TextInput
        id="search"
        type="search"
        icon={HiSearch}
        placeholder="Search"
        required
      />
    </form>
  );
}
