import { useQuery } from "@tanstack/react-query";
import { get, ref, child } from "firebase/database";

import { database } from "../../common/firebase";

async function fetchFile({ uuid }) {
  return (await get(child(ref(database), `files/${uuid}`))).val();
}

export function queryKeyFn({ path, uuid }) {
  return [`file-${path}/${uuid}`];
}

export default function useFile({ file: { path, uuid } }) {
  const { data: file, ...rest } = useQuery({
    queryKey: queryKeyFn({ path, uuid }),
    queryFn: () => fetchFile({ path, uuid }),
  });

  return { file, ...rest };
}
