import { Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import {
  PiFolderBold,
  PiFolderMinusBold,
  PiFolderPlusBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";

import type FolderInterface from "./Folder.interface";

const indentations = {
  0: "pl-2",
  1: "pl-6",
  2: "pl-10",
  3: "pl-14",
  4: "pl-20",
  5: "pl-24",
  6: "pl-28",
};

export default function Folder({
  folder,
  indent,
  parent,
}: {
  folder: FolderInterface;
  indent: number;
  parent: string;
}) {
  if (!folder?.children.length) {
    return (
      <Sidebar.Item
        className={indentations[indent] ?? "pl-28"}
        as={Link}
        to={`${parent}/${folder.name}`}
        icon={PiFolderBold}
      >
        {folder.name}
      </Sidebar.Item>
    );
  }

  return (
    <Sidebar.Collapse
      className={twMerge(indentations[indent] ?? "pl-28", "flex-row-reverse")}
      label={folder.name}
      renderChevronIcon={(theme, open) =>
        open ? <PiFolderMinusBold /> : <PiFolderPlusBold />
      }
    >
      {folder.children.map((folder) => (
        <Folder
          indent={indent + 1}
          parent={`${parent}/${folder.name}`}
          key={folder.uuid}
          folder={folder}
        />
      ))}
    </Sidebar.Collapse>
  );
}
