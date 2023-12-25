import { TextInput } from "flowbite-react";
import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function SearchForm() {
  return (
    <div className="grow px-4">
      <form className="w-2/4">
        <TextInput
          id="search"
          type="search"
          icon={PiMagnifyingGlassBold}
          placeholder="Search"
          required
        />
      </form>
    </div>
  );
}
