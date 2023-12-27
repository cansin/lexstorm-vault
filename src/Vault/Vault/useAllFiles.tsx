import { useQuery } from "@tanstack/react-query";
import { get, query, ref } from "firebase/database";

import { database } from "../../common/firebase";
import buildFileList from "../../common/buildFileList";

async function fetchAllFiles() {
  const files = (await get(query(ref(database, "files")))).val();

  return buildFileList(files);
}

export function queryKeyFn() {
  return ["all-files"];
}

export default function useAllFiles() {
  const { data: files, ...rest } = useQuery({
    queryKey: queryKeyFn(),
    queryFn: fetchAllFiles,
  });

  return { files, ...rest };
}
