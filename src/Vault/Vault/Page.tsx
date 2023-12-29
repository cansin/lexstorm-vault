import { Spinner } from "flowbite-react";

import FilesTable from "../common/FilesTable/FilesTable";

import VaultBreadcrumb from "./Breadcrumb";
import useAllFiles from "./useAllFiles";

export default function VaultPage({ label, filter }) {
  const { isLoading, isError, files, error } = useAllFiles();

  return (
    <div className="p-1 m-3 grow overflow-auto">
      {!isLoading && isError && <div>{error.message}</div>}

      {isLoading && (
        <Spinner aria-label="Loading files...." className="block mx-auto" />
      )}

      {!isLoading && !isError && files && (
        <>
          <VaultBreadcrumb label={label} />
          <FilesTable files={files.filter(filter)} />
        </>
      )}
    </div>
  );
}
