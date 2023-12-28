import FileInterface from "./File.interface";
import EntityInterface from "./Entity.interface";
import FolderInterface from "./Folder.interface";

export default function buildFileList({
  folders,
  files,
}: {
  folders?: Array<FolderInterface>;
  files?: Array<FileInterface>;
}) {
  const fileList: Array<EntityInterface> = [];

  for (const uuid in folders) {
    fileList.push({ ...folders[uuid], uuid, isFolder: true });
  }

  for (const uuid in files) {
    fileList.push({ ...files[uuid], uuid });
  }

  return fileList;
}
