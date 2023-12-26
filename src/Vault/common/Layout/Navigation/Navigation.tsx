import { Sidebar, Spinner, type CustomFlowbiteTheme } from "flowbite-react";
import { PiDatabaseBold, PiTrashBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import Folder from "./Folder";
import useAllFolders from "./useAllFolders";

const theme: CustomFlowbiteTheme["sidebar"] = {
  item: {
    content: { base: "px-3 flex-1 whitespace-nowrap truncate" },
    icon: { base: "" },
  },
  collapse: {
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left truncate",
    },
  },
};

export default function Navigation({ className }) {
  const { isLoading, isError, data, error } = useAllFolders();

  return (
    <Sidebar
      className={twMerge(className, "border-r shrink-0")}
      theme={theme}
      aria-label="Navigation"
    >
      <Sidebar.Items className="flex flex-col h-full">
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/vault/all-files" icon={PiDatabaseBold}>
            All files
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/vault/deleted-files" icon={PiTrashBold}>
            Deleted files
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="grow overflow-y-auto">
          {isLoading && (
            <Spinner
              aria-label="Loading folders...."
              className="block mx-auto"
            />
          )}

          {!isLoading && !isError && (
            <Folder
              indent={0}
              folder={{ name: "Folders", children: data.items }}
              parent="/vault"
            />
          )}

          {!isLoading && isError && <Sidebar.CTA>{error}</Sidebar.CTA>}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
