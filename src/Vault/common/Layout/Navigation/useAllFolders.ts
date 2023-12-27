import { useQuery } from "@tanstack/react-query";
import { child, get, ref } from "firebase/database";

import { database } from "../../../../common/firebase";
import buildFolderTree from "../../../../common/buildFolderTree";

async function fetchAllFolders() {
  const folders = (await get(child(ref(database), `folders`))).val();
  return buildFolderTree(folders);
}

export default function useAllFolders() {
  const { data: vault, ...rest } = useQuery({
    queryKey: ["all-folders"],
    queryFn: fetchAllFolders,
  });
  return { vault, ...rest };
}
