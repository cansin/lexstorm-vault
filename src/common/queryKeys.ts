export function allFilesKey() {
  return ["all-files"];
}

export function allFoldersKey() {
  return ["all-folders"];
}

export function folderKey({ uuid }) {
  return [`folder-${uuid}`];
}
