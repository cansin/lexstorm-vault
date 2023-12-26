import { Sidebar, Spinner, type CustomFlowbiteTheme } from "flowbite-react";
import { PiDatabaseBold, PiTrashBold } from "react-icons/pi";
import Folder from "./Folder";
import useFolders from "./useFolders";
import { Link } from "react-router-dom";

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

export default function Navigation() {
  const { isLoading, isError, data, error } = useFolders();

  return (
    <Sidebar
      theme={theme}
      className="border-r shrink-0"
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