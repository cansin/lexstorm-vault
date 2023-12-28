import { Footer } from "flowbite-react";
import type { CopyrightProps, Button } from "flowbite-react";
import type { Link } from "react-router-dom";
import type { ComponentProps } from "react";

export default function FooterCopyright(
  props: ComponentProps<typeof Button | typeof Link> & CopyrightProps,
) {
  return <Footer.Copyright {...props} />;
}
