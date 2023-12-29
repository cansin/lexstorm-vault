import { useState } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { database } from "@/common/firebase";
import type FileInterface from "@/common/File.interface";
import { allFilesKey, folderKey } from "@/common/queryKeys";

export default function useUploadFile({ parent }) {
  const [showFilePickerModal, setShowFilePickerModal] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: createFile } = useMutation({
    async mutationFn(values: FileInterface) {
      await push(ref(database, "files"), {
        ...values,
        parentUuid: parent?.uuid ?? "",
        created: serverTimestamp(),
        deleted: "",
      });
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFilesKey() });
      if (parent) {
        client.invalidateQueries({
          queryKey: folderKey(parent),
        });
      }
    },
  });

  async function handleCreateFiles({ filesUploaded }) {
    await Promise.all(filesUploaded.map(createFile));
    setShowFilePickerModal(false);
  }

  return {
    toggleFilePickerModal() {
      setShowFilePickerModal(!showFilePickerModal);
    },
    showFilePickerModal,
    handleCreateFiles,
  };
}
