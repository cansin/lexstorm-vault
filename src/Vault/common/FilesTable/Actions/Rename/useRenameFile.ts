import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, update } from "firebase/database";

import { database } from "@/common/firebase";
import { allFilesKey, allFoldersKey, folderKey } from "@/common/queryKeys";

export default function useRenameFile({
  file: { parentUuid, uuid, isFolder },
}) {
  const [showRenameFileField, setShowRenameFileField] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: renameFile } = useMutation({
    async mutationFn(values: { filename: string }) {
      await update(
        ref(database, `${isFolder ? "folders" : "files"}/${uuid}`),
        values,
      );
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFilesKey() });
      client.invalidateQueries({ queryKey: allFoldersKey() });
      if (parentUuid) {
        client.invalidateQueries({
          queryKey: folderKey({ uuid: parentUuid }),
        });
      }
    },
  });

  async function handleRenameFile(values, { setSubmitting }) {
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
