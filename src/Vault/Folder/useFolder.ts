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

async function fetchChildFiles({ uuid }) {
  return get(
    query(
      ref(database, "files"),
      orderByChild("parentUuid"),
      startAt(uuid),
      endAt(uuid),
    ),
  );
}

function fetchChildFolders({ uuid }) {
  return get(
    query(
      ref(database, "folders"),
      orderByChild("parentUuid"),
      startAt(uuid),
      endAt(uuid),
    ),
  );
}

function fetchCurrentFolder({ uuid }) {
  return get(child(ref(database), `folders/${uuid}`));
}

async function fetchFolder({ uuid }) {
  const [folder, childFolders, childFiles] = await Promise.all([
    fetchCurrentFolder({ uuid }),
    fetchChildFolders({ uuid }),
    fetchChildFiles({ uuid }),
  ]);

  return {
    ...folder.val(),
    children: buildFileList({
      folders: childFolders.val() ?? {},
      files: childFiles.val() ?? {},
    }),
  };
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
