export default function buildFileList(files) {
  const fileList = [];

  for (const uuid in files) {
    fileList.push({ ...files[uuid], uuid });
  }

  return fileList;
}
