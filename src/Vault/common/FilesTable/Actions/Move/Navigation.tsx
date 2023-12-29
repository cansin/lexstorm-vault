import { Sidebar, Spinner } from "flowbite-react";

import useAllFolders from "../../../useAllFolders";

import Folder from "./Folder";

export default function Navigation({ onClick }) {
  const { isLoading, isError, vault } = useAllFolders();

  return (
    <Sidebar className="w-full">
      <Sidebar.Items className="flex flex-col h-full">
        <Sidebar.ItemGroup className="grow overflow-y-auto">
          {isLoading && (
            <Spinner
              aria-label="Loading folders...."
              className="block mx-auto"
            />
          )}

          {!isLoading && !isError && vault && (
            <Folder
              indent={0}
              folder={{
                uuid: "",
                filename: "",
                children: vault.children,
              }}
              onClick={onClick}
            />
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
