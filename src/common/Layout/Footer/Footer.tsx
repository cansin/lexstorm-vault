import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import FooterLink from "./Link";
import FooterCopyright from "./Copyright";

interface CommonFooterProps {
  copyrightClassName?: string;
}

export default function CommonFooter({
  copyrightClassName = undefined,
}: CommonFooterProps) {
  return (
    <Footer className="border-0 flex">
      <FooterCopyright
        className={twMerge(
          "w-64 p-6 h-full border-t hidden sm:block",
          copyrightClassName,
        )}
        as={Link}
        to="/about"
        by="LexStorm Vault™"
        year={2023}
      />
      <Footer.LinkGroup className="border-t grow p-6 justify-end">
        <FooterLink as={Link} to="/about">
          About
        </FooterLink>
        <FooterLink as={Link} to="/privacy-policy">
          Privacy Policy
        </FooterLink>
        <FooterLink as={Link} to="/licensing">
          Licensing
        </FooterLink>
        <FooterLink as={Link} to="/contact">
          Contact
        </FooterLink>
      </Footer.LinkGroup>
    </Footer>
  );
}
