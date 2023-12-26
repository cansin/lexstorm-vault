import { Button } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const theme: CustomFlowbiteTheme["button"] = {
  inner: {
    base: "flex items-center rounded-md text-xs px-2 py-1",
  },
};

export default function ActionButton({ onClick, Icon, label }) {
  return (
    <Button theme={theme} pill color="gray" size="xs" onClick={onClick}>
      <Icon className="mr-1 h-4 w-4" />
      {label}
    </Button>
  );
}
