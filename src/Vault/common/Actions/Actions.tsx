import UploadFileButton from "./UploadFile/Button";
import CreateFolderButton from "./CreateFolder/Button";

export default function ActionButtons({ parent }) {
  return (
    <div className="px-4 pt-4 md:pt-1 flex flex-wrap gap-2 mx-auto md:mx-0">
      <UploadFileButton parent={parent} />
      <CreateFolderButton parent={parent} />
    </div>
  );
}
