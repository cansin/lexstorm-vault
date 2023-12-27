import { useState } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { database } from "../../../common/firebase";
import { queryKeyFn as allFoldersQueryKeyFn } from "../Layout/Navigation/useAllFolders";
import { queryKeyFn as allFilesQueryKeyFn } from "../../AllFiles/useAllFiles";

export default function useUploadFile() {
  const [showFilePickerModal, setShowFilePickerModal] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: createFile } = useMutation({
    mutationFn(values) {
      push(ref(database, "files"), {
        ...values,
        parent: "",
        modified: serverTimestamp(),
        deleted: "",
      });
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFoldersQueryKeyFn() });
      client.invalidateQueries({ queryKey: allFilesQueryKeyFn() });
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
