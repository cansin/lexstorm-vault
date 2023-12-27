import { Spinner } from "flowbite-react";

import FileHeader from "./Header";
import FileViewer from "./Viewer";
import useFile from "./useFile";

export default function FilePage({ path, uuid }) {
  const { isLoading, isError, file, error } = useFile({ file: { path, uuid } });

  return (
    <>
      {!isLoading && isError && <div>{error}</div>}

      {isLoading && (
        <Spinner aria-label="Loading file...." className="block mx-auto" />
      )}

      {!isLoading && !isError && (
        <div className="grow overflow-y-auto">
          <FileHeader file={file} />
          <FileViewer file={file} />
        </div>
      )}
    </>
  );
}
