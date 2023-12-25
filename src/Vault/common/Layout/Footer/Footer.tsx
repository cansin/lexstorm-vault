import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterContent() {
  return (
    <Footer className="border-0">
      <Footer.Copyright
        className="w-64 p-6 bg-gray-50 h-full border-r"
        as={Link}
        to="/about"
        by="LexStorm Vault™"
        year={2023}
      />
      <Footer.LinkGroup className="border-t grow p-6 justify-end">
        <Footer.Link as={Link} to="/about">
          About
        </Footer.Link>
        <Footer.Link as={Link} to="/privacy-policy">
          Privacy Policy
        </Footer.Link>
        <Footer.Link as={Link} to="/licensing">
          Licensing
        </Footer.Link>
        <Footer.Link as={Link} to="/contact">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
