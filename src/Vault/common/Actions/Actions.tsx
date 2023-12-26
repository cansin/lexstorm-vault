import UploadFileButton from "./UploadFile";
import CreateFolderButton from "./CreateFolder";

export default function ActionButtons() {
  return (
    <div className="px-4 pt-4 md:pt-1 flex flex-wrap gap-2 mx-auto md:mx-0">
      <UploadFileButton />
      <CreateFolderButton />
    </div>
  );
}
