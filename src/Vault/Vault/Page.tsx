import { Spinner } from "flowbite-react";

import FilesTable from "../common/FilesTable/FilesTable";

import useAllFiles from "./useAllFiles";
import VaultBreadcrumb from "./Breadcrumb";

export default function VaultPage({ label, filter }) {
  const { isLoading, isError, files, error } = useAllFiles();

  return (
    <div className="p-1 m-3 grow overflow-auto">
      {!isLoading && isError && <div>{error}</div>}

      {isLoading && (
        <Spinner aria-label="Loading files...." className="block mx-auto" />
      )}

      {!isLoading && !isError && (
        <>
          <VaultBreadcrumb label={label} />
          <FilesTable files={files} filter={filter} />
        </>
      )}
    </div>
  );
}
