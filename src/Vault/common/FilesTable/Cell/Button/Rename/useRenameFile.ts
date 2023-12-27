import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, update } from "firebase/database";

import { database } from "../../../../../../common/firebase";
import { queryKeyFn as allFoldersQueryKeyFn } from "../../../../Layout/Navigation/useAllFolders";
import { queryKeyFn as allFilesQueryKeyFn } from "../../../../../Vault/useAllFiles";
import { queryKeyFn as folderQueryKeyFn } from "../../../../../Folder/useFolder";

export default function useRenameFile({
  file: { parentUuid, uuid, isFolder },
}) {
  const [showRenameFileField, setShowRenameFileField] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: renameFile } = useMutation({
    mutationFn(values) {
      update(
        ref(database, `${isFolder ? "folders" : "files"}/${uuid}`),
        values,
      );
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFilesQueryKeyFn() });
      client.invalidateQueries({ queryKey: allFoldersQueryKeyFn() });
      if (parentUuid) {
        client.invalidateQueries({
          queryKey: folderQueryKeyFn({ uuid: parentUuid }),
        });
      }
    },
  });

  async function handleRenameFile(
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) {
    setSubmitting(true);
    await renameFile(values);
    setSubmitting(false);
    setShowRenameFileField(false);
  }

  return {
    toggleRenameFileField() {
      setShowRenameFileField(!showRenameFileField);
    },
    showRenameFileField,
    handleRenameFile,
  };
}
