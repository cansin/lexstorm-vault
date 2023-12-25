import { Footer } from "flowbite-react";

export default function FooterContent() {
  return (
    <Footer className="p-4">
      <Footer.Copyright href="#" by="LexStorm Vault™" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
