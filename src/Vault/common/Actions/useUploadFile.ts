import { useState } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { database } from "../../../common/firebase";
import { queryKeyFn as allFilesQueryKeyFn } from "../../Vault/useAllFiles";
import { queryKeyFn as folderQueryKeyFn } from "../../Folder/useFolder";

export default function useUploadFile({ parent }) {
  const [showFilePickerModal, setShowFilePickerModal] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: createFile } = useMutation({
    mutationFn(values) {
      push(ref(database, "files"), {
        ...values,
        parentUuid: parent?.uuid ?? "",
        created: serverTimestamp(),
        deleted: "",
      });
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
