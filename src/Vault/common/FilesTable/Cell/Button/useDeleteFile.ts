import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeyFn as allFilesQueryKeyFn } from "../../../../AllFiles/useAllFiles";

function deleteFile(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      file.deleted = new Date();
      resolve(file);
    }, 30);
  });
}

export const useDeleteFile = ({ file }) => {
  const client = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn() {
      return deleteFile(file);
    },
    onSuccess(file) {
      client.invalidateQueries({ queryKey: allFilesQueryKeyFn() });
      client.invalidateQueries({ queryKey: [`folder-${file.parent}`] });
    },
  });

  return {
    deleteFile: mutate,
    ...rest,
  };
};
