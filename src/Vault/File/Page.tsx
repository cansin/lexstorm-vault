import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

import FileHeader from "./Header";
import FileViewer from "./Viewer";
import useFile from "./useFile";

export default function FilePage() {
  const { "*": splat } = useParams();
  const [parents, uuid] = [
    splat.split("/").slice(0, -1),
    splat.split("/").at(-1),
  ];
  const path = parents.join("/");
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
