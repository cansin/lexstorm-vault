import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeyFn as allFilesQueryKeyFn } from "../../../../AllFiles/useAllFiles";
import { queryKeyFn as folderQueryKeyFn } from "../../../../Folder/useFolder";

function deleteFile(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      file.deleted = new Date();
      resolve(file);
    }, 30);
  });
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
