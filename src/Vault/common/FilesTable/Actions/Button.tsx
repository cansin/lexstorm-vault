import { Button, Tooltip } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const theme: CustomFlowbiteTheme["button"] = {
  base: "p-1",
  inner: {
    base: "flex items-center rounded-md text-xs px-2 py-1",
  },
};

export default function ActionButton({ label, onClick, Icon }) {
  return (
    <Tooltip content={label} animation={false} placement="bottom">
      <Button pill theme={theme} color="gray" size="xs" onClick={onClick}>
        <Icon className="h-4 w-4" />
      </Button>
    </Tooltip>
  );
}
