import { Footer } from "flowbite-react";
import type {
  Button,
  FooterLinkProps as FlowbiteFooterLinkProps,
} from "flowbite-react";
import type { Link } from "react-router-dom";
import type { ComponentProps } from "react";

interface FooterLinkProps extends Omit<FlowbiteFooterLinkProps, "href"> {
  href?: string;
}

export default function FooterLink(
  props: ComponentProps<typeof Button | typeof Link> & FooterLinkProps,
) {
  return <Footer.Link href="" {...props} />;
}
