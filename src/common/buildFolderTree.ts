export default function buildFolderTree(folders) {
  const tree = { uuid: null, name: null, children: [] };
  const folderMap = {};

  // Create a map of all folders
  for (const uuid in folders) {
    folderMap[uuid] = { ...folders[uuid], uuid, children: [] };
  }

  // Build the tree structure
  for (const uuid in folderMap) {
    const folder = folderMap[uuid];
    if (folder.parent) {
      folderMap[folder.parent].children.push(folder);
    } else {
      tree.children.push(folder);
    }
  }

  return tree;
}
