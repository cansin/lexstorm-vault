import { useQuery } from "@tanstack/react-query";
import { child, get, ref } from "firebase/database";

import { database } from "../../../../common/firebase";

function buildTree(folders) {
  const tree = { key: null, name: null, children: [] };
  const folderMap = {};

  // Create a map of all folders
  for (const key in folders) {
    folderMap[key] = { ...folders[key], key, children: [] };
  }

  // Build the tree structure
  for (const key in folderMap) {
    const folder = folderMap[key];
    if (folder.parent) {
      folderMap[folder.parent].children.push(folder);
    } else {
      tree.children.push(folder);
    }
  }

  return tree;
}

async function fetchAllFolders() {
  const folders = (await get(child(ref(database), `folders`))).val();
  return buildTree(folders);
}

export default function useAllFolders() {
  const { data, ...rest } = useQuery({
    queryKey: ["all-folders"],
    queryFn: fetchAllFolders,
  });
  return { vault: data, ...rest };
}
