import { Button, Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { PiCaretDown, PiCaretRight, PiDotOutline } from "react-icons/pi";
import { useState } from "react";
import { act } from "react-dom/test-utils";

import type FolderInterface from "../../../../common/Folder.interface";

import SidebarCollapse from "./Collapse";

const indentations = {
  0: "pl-2",
  1: "pl-6",
  2: "pl-10",
  3: "pl-14",
  4: "pl-20",
  5: "pl-24",
  6: "pl-28",
};

interface FolderProps {
  folder: FolderInterface;
  indent: number;
  onClick: () => void;
}

export default function Folder({ folder, indent, onClick }: FolderProps) {
  if (!folder?.children?.length) {
    return (
      <Sidebar.Item
        className={twMerge(indentations[indent] ?? "pl-36", "cursor-pointer")}
        icon={PiDotOutline}
        onClick={() => onClick(folder)}
      >
        {folder.filename}
      </Sidebar.Item>
    );
  }

  return (
    <SidebarCollapse
      className={twMerge(indentations[indent] ?? "pl-32", "flex-row-reverse")}
      label={
        <span onClick={() => onClick(folder)}>
          {folder.filename ? folder.filename : "Folders"}
        </span>
      }
      renderChevronIcon={(_, open) =>
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
            onClick={onClick}
          />
        ))}
    </SidebarCollapse>
  );
}
