import { TextInput } from "flowbite-react";
import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function SearchForm() {
  return (
    <div className="grow px-4 hidden sm:block">
      <form className="w-full lg:w-3/4 pr-16">
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
