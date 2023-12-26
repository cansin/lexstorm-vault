import { Spinner } from "flowbite-react";

import FilesTable from "../common/FilesTable/FilesTable";

import useAllFiles from "./useAllFiles";
import AllFilesBreadcrumb from "./Breadcrumb";

export default function AllFilesPage() {
  const { isLoading, isError, data, error } = useAllFiles();

  return (
    <div className="p-1 m-3 grow overflow-auto">
      {!isLoading && isError && <div>{error}</div>}

      {isLoading && (
        <Spinner aria-label="Loading folders...." className="block mx-auto" />
      )}

      {!isLoading && !isError && (
        <>
          <AllFilesBreadcrumb />
          <FilesTable files={data.items} />
        </>
      )}
    </div>
  );
}
