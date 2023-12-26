import { Spinner } from "flowbite-react";

import FileHeader from "./Header";
import FileViewer from "./Viewer";
import useFile from "./useFile";

export default function FilePage({ parent, name }) {
  const { isLoading, isError, data: file, error } = useFile({ parent, name });

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
