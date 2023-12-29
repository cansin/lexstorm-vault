import { useState } from "react";
import { ref, push, serverTimestamp } from "firebase/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { database } from "@/common/firebase";
import { allFoldersKey } from "@/common/queryKeys";

export default function useCreateFolder({ parent }) {
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: createFolder } = useMutation({
    async mutationFn(values: { filename: string }) {
      await push(ref(database, "folders"), {
        ...values,
        parentUuid: parent?.uuid ?? "",
        created: serverTimestamp(),
        deleted: "",
      });
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFoldersKey() });
    },
  });

  async function handleCreateFolder(values, { setSubmitting }) {
    setSubmitting(true);
    await createFolder(values);
    setSubmitting(false);
    setShowCreateFolderModal(false);
  }

  return {
    toggleCreateFolderModal() {
      setShowCreateFolderModal(!showCreateFolderModal);
    },
    showCreateFolderModal,
    handleCreateFolder,
  };
}
