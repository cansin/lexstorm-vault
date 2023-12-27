import { useState } from "react";
import { type FormikHelpers } from "formik";
import { ref, push } from "firebase/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { database } from "../../../common/firebase";
import { queryKeyFn as allFilesQueryKeyFn } from "../../AllFiles/useAllFiles";

export default function useCreateFolder() {
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: createFolder } = useMutation({
    mutationFn(values) {
      push(ref(database, "folders"), values);
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFilesQueryKeyFn() });
    },
  });

  async function handleCreateFolder(
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) {
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
