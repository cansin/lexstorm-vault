import { useState } from "react";
import { type FormikHelpers } from "formik";
import { ref, push, serverTimestamp } from "firebase/database";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { database } from "../../../common/firebase";
import { queryKeyFn as allFoldersQueryKeyFn } from "../Layout/Navigation/useAllFolders";

export default function useCreateFolder({ parent }) {
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const client = useQueryClient();
  const { mutateAsync: createFolder } = useMutation({
    mutationFn(values) {
      push(ref(database, "folders"), {
        ...values,
        parentUuid: parent?.uuid ?? "",
        created: serverTimestamp(),
        deleted: "",
      });
    },
    onSuccess() {
      client.invalidateQueries({ queryKey: allFoldersQueryKeyFn() });
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
