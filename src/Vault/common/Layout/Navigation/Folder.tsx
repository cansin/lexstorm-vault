import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { PiCaretDown, PiCaretRight, PiDotOutline } from "react-icons/pi";
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

export default function Folder({ folder, indent, parentUuid }) {
  const path = [parentUuid, folder.uuid].filter((e) => e).join("/");

  if (!folder?.children.length) {
    return (
      <Sidebar.Item
        className={indentations[indent] ?? "pl-36"}
        as={Link}
        to={`/vault/folder/${path}`}
        icon={PiDotOutline}
      >
        {folder.name}
      </Sidebar.Item>
    );
  }

  return (
    <>
      <Sidebar.Collapse
        className={twMerge(indentations[indent] ?? "pl-32", "flex-row-reverse")}
        label={
          folder.name ? (
            <Link to={`/vault/folder/${folder.uuid}`}>{folder.name}</Link>
          ) : (
            "Folders"
          )
        }
        renderChevronIcon={(theme, open) =>
          open ? <PiCaretDown /> : <PiCaretRight />
        }
      >
        {folder.children
          .filter((f) => !f.deleted)
          .map((child) => (
            <Folder
              indent={indent + 1}
              parentUuid={folder.uuid}
              key={child.uuid}
              folder={child}
            />
          ))}
      </Sidebar.Collapse>
    </>
  );
}
