import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, set } from "firebase/database";

import { queryKeyFn as allFilesQueryKeyFn } from "../../../../AllFiles/useAllFiles";
import { queryKeyFn as folderQueryKeyFn } from "../../../../Folder/useFolder";
import { database } from "../../../../../common/firebase";

async function deleteFile({ uuid }) {
  await set(ref(database, `files/${uuid}`), { deleted: new Date() });
}

function getParentFolder({ parent }) {
  const path = parent.split("/");
  return {
    parent: path.slice(0, -1),
    name: path.pop(),
  };
}

export const useDeleteFile = ({ file }) => {
  const client = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn() {
      return deleteFile(file);
    },
    onSuccess(file) {
      client.invalidateQueries({ queryKey: allFilesQueryKeyFn() });
      client.invalidateQueries({
        queryKey: folderQueryKeyFn(getParentFolder(file)),
      });
    },
  });

  return {
    deleteFile: mutate,
    ...rest,
  };
};
