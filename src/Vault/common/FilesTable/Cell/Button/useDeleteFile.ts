import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, serverTimestamp, update } from "firebase/database";

import { queryKeyFn as allFilesQueryKeyFn } from "../../../../Vault/useAllFiles";
import { queryKeyFn as folderQueryKeyFn } from "../../../../Folder/useFolder";
import { database } from "../../../../../common/firebase";

export const useDeleteFile = ({ file: { parent, uuid } }) => {
  const client = useQueryClient();
  const { mutateAsync: deleteFile, ...rest } = useMutation({
    mutationFn() {
      update(ref(database, `files/${uuid}`), { deleted: serverTimestamp() });
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFilesQueryKeyFn() });
      if (parent) {
        client.invalidateQueries({
          queryKey: folderQueryKeyFn(parent),
        });
      }
    },
  });

  return {
    deleteFile,
    ...rest,
  };
};
