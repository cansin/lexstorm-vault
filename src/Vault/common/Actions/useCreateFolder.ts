import { useState } from "react";
import { type FormikHelpers } from "formik";
import { ref, push } from "firebase/database";

import { database } from "../../../common/firebase";

export default function useFilePicker() {
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);

  async function handleCreateFolder(
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) {
    setSubmitting(true);
    await push(ref(database, "folders"), values);
    setSubmitting(false);
  }

  return {
    toggleCreateFolderModal() {
      setShowCreateFolderModal(!showCreateFolderModal);
    },
    showCreateFolderModal,
    handleCreateFolder,
  };
}
