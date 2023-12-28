import { Sidebar } from "flowbite-react";
import type { SidebarCollapseProps as FlowbiteSidebarCollapseProps } from "flowbite-react";
import type { ReactNode } from "react";

interface SidebarCollapseProps
  extends Omit<FlowbiteSidebarCollapseProps, "label"> {
  label?: ReactNode;
}

export default function SidebarCollapse(props: SidebarCollapseProps) {
  return <Sidebar.Collapse {...props} />;
}
