import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

import FilesTable from "../common/FilesTable/FilesTable";

import useFolder from "./useFolder";
import FolderBreadcrumb from "./Breadcrumb";

export default function FolderPage() {
  const { "*": splat } = useParams();
  const uuid = splat?.split("/")?.at(-1);
  const { isLoading, isError, folder, error } = useFolder({
    folder: { uuid },
  });

  return (
    <div className="p-1 m-3 grow overflow-auto">
      {!isLoading && isError && <div>{error.message}</div>}

      {isLoading && (
        <Spinner aria-label="Loading folders...." className="block mx-auto" />
      )}

      {!isLoading && !isError && (
        <>
          <FolderBreadcrumb folder={folder} />
          <FilesTable
            files={folder.children.filter((f) => !f.deleted)}
            showParents={false}
          />
        </>
      )}
    </div>
  );
}
