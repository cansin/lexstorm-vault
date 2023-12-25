import { Sidebar, Spinner } from "flowbite-react";
import { HiOutlineTrash, HiOutlineDatabase } from "react-icons/hi";
import Folder from "./Folder";
import useFolders from "./useFolders";

export default function Navigation() {
  const { isLoading, isError, data, error } = useFolders();

  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo
        href="#"
        img="/lexstorm-vault.svg"
        imgAlt="LexStorm Vault logo"
      >
        <span className="font-extrabold font-serif">LexStorm Vault</span>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiOutlineDatabase}>
            All files
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineTrash}>
            Deleted files
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {isLoading && (
            <Spinner
              aria-label="Loading folders...."
              className="block mx-auto"
            />
          )}
          {!isLoading && !isError && (
            <Sidebar.Collapse label="Folders">
              {data?.items.map((folder) => (
                <Folder key={folder.uuid} folder={folder} />
              ))}
            </Sidebar.Collapse>
          )}
          {!isLoading && isError && <Sidebar.CTA>{error}</Sidebar.CTA>}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
