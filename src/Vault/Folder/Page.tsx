import { Spinner } from "flowbite-react";

import FilesTable from "../common/FilesTable/FilesTable";

import useFolder from "./useFolder";
import FolderBreadcrumb from "./Breadcrumb";

export default function FolderPage({ parent, name }) {
  const {
    isLoading,
    isError,
    data: folder,
    error,
  } = useFolder({ folder: { parent, name } });

  return (
    <div className="p-1 m-3 grow overflow-auto">
      {!isLoading && isError && <div>{error}</div>}

      {isLoading && (
        <Spinner aria-label="Loading folders...." className="block mx-auto" />
      )}

      {!isLoading && !isError && (
        <>
          <FolderBreadcrumb folder={folder} />
          <FilesTable files={folder.children} showParents={false} />
        </>
      )}
    </div>
  );
}
