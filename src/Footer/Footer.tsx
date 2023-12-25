import { Footer } from "flowbite-react";

export default function FooterContent() {
  return (
    <Footer className="border-0">
      <Footer.Copyright
        className="w-64 p-6 bg-gray-50 h-full border-r"
        href="#"
        by="LexStorm Vault™"
        year={2023}
      />
      <Footer.LinkGroup className="border-t grow p-6 justify-end">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
