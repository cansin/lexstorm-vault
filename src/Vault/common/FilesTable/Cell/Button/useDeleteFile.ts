import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, set } from "firebase/database";

import { queryKeyFn as allFilesQueryKeyFn } from "../../../../AllFiles/useAllFiles";
import { queryKeyFn as folderQueryKeyFn } from "../../../../Folder/useFolder";
import { database } from "../../../../../common/firebase";

export const useDeleteFile = ({ file: { parent, uuid } }) => {
  const client = useQueryClient();
  const { mutateAsync: deleteFile, ...rest } = useMutation({
    mutationFn() {
      set(ref(database, `files/${uuid}`), { deleted: new Date() });
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
