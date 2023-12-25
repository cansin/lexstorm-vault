import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <Navbar.Brand
      as={Link}
      to="/"
      className="w-64 pl-3 py-5 bg-gray-50 border-r"
    >
      <img
        src="/lexstorm-vault.svg"
        className="mr-3 h-6 sm:h-9"
        alt="LexStorm Vault"
      />
      <span className="self-center whitespace-nowrap font-extrabold font-serif dark:text-white">
        LexStorm Vault
      </span>
    </Navbar.Brand>
  );
}
