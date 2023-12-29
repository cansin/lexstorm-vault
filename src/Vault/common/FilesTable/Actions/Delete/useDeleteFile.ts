import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, serverTimestamp, update } from "firebase/database";

import { database } from "@/common/firebase";
import { allFilesKey, folderKey } from "@/common/queryKeys";

export default function useDeleteFile({
  file: { parentUuid, uuid, isFolder },
}) {
  const client = useQueryClient();
  const { mutateAsync: deleteFile, ...rest } = useMutation({
    async mutationFn() {
      await update(ref(database, `${isFolder ? "folders" : "files"}/${uuid}`), {
        deleted: serverTimestamp(),
      });
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFilesKey() });
      if (parentUuid) {
        client.invalidateQueries({
          queryKey: folderKey({ uuid: parentUuid }),
        });
      }
    },
  });

  return {
    deleteFile,
    ...rest,
  };
}
