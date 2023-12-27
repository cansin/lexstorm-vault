import { useQuery } from "@tanstack/react-query";
import { get, ref, child } from "firebase/database";

import { database } from "../../common/firebase";

async function fetchFile({ uuid }) {
  return (await get(child(ref(database), `files/${uuid}`))).val();
}

export function queryKeyFn({ uuid }) {
  return [`file-${uuid}`];
}

export default function useFile({ file: { uuid } }) {
  const { data: file, ...rest } = useQuery({
    queryKey: queryKeyFn({ uuid }),
    queryFn: () => fetchFile({ uuid }),
  });

  return { file, ...rest };
}
