export default function buildFileList({ folders, files }) {
  const fileList = [];

  for (const uuid in folders) {
    fileList.push({ ...folders[uuid], uuid, isFolder: true });
  }

  for (const uuid in files) {
    fileList.push({ ...files[uuid], uuid });
  }

  return fileList;
}
