import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

import FileHeader from "./Header";
import FileViewer from "./Viewer";
import useFile from "./useFile";

export default function FilePage() {
  const { "*": splat } = useParams();
  const uuid = splat?.split("/")?.at(-1);
  const { isLoading, isError, file, error } = useFile({
    file: { uuid },
  });

  return (
    <>
      {!isLoading && isError && <div>{error.message}</div>}

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
