import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { PiFolder, PiFolderMinus, PiFolderPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

const indentations = {
  0: "pl-2",
  1: "pl-6",
  2: "pl-10",
  3: "pl-14",
  4: "pl-20",
  5: "pl-24",
  6: "pl-28",
};

export default function Folder({ folder, indent, parent }) {
  const path = [parent, folder.uuid].filter((e) => e).join("/");

  if (!folder?.children.length) {
    return (
      <Sidebar.Item
        className={indentations[indent] ?? "pl-28"}
        as={Link}
        to={`/vault/folder/${path}`}
        icon={PiFolder}
      >
        {folder.name}
      </Sidebar.Item>
    );
  }

  return (
    <Sidebar.Collapse
      className={twMerge(indentations[indent] ?? "pl-28", "flex-row-reverse")}
      label={folder.name ?? "Folders"}
      renderChevronIcon={(theme, open) =>
        open ? <PiFolderMinus /> : <PiFolderPlus />
      }
    >
      {folder.children.map((child) => (
        <Folder
          indent={indent + 1}
          parent={path}
          key={child.uuid}
          folder={child}
        />
      ))}
    </Sidebar.Collapse>
  );
}
