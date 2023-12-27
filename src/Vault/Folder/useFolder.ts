import { useQuery } from "@tanstack/react-query";
import {
  get,
  query,
  ref,
  orderByChild,
  startAt,
  endAt,
  child,
} from "firebase/database";

import { database } from "../../common/firebase";
import buildFileList from "../../common/buildFileList";

async function fetchFiles({ uuid }) {
  return (
    await get(
      query(
        ref(database, "files"),
        orderByChild("parent"),
        startAt(uuid),
        endAt(uuid),
      ),
    )
  ).val();
}

async function fetchFolder({ uuid }) {
  const folder = (await get(child(ref(database), `folders/${uuid}`))).val();
  const files = await fetchFiles({ uuid });

  return { ...folder, children: buildFileList(files) };
}

export function queryKeyFn({ uuid }) {
  return [`folder-${uuid}`];
}

export default function useFolder({ folder: { uuid } }) {
  const { data: folder, ...rest } = useQuery({
    queryKey: queryKeyFn({ uuid }),
    queryFn: () => fetchFolder({ uuid }),
  });

  return { folder, ...rest };
}
