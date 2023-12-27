import { useQuery } from "@tanstack/react-query";
import {
  get,
  query,
  ref,
  orderByChild,
  startAt,
  child,
} from "firebase/database";

import { database } from "../../common/firebase";
import buildFileList from "../../common/buildFileList";

async function fetchFiles({ uuid }) {
  return (
    await get(
      query(ref(database, "files"), orderByChild("parent"), startAt(uuid)),
    )
  ).val();
}

async function fetchFolder({ uuid }) {
  const folder = (await get(child(ref(database), `folders/${uuid}`))).val();
  const files = await fetchFiles({ uuid });

  return { ...folder, children: buildFileList(files) };
}

export function queryKeyFn({ path, uuid }) {
  return [`folder-${path}/${uuid}`];
}

export default function useFolder({ folder: { path, uuid } }) {
  const { data: folder, ...rest } = useQuery({
    queryKey: queryKeyFn({ path, uuid }),
    queryFn: () => fetchFolder({ path, uuid }),
  });

  return { folder, ...rest };
}
