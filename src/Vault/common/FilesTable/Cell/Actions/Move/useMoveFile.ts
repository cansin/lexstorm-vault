import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";

import { database } from "../../../../../../common/firebase";
import { queryKeyFn as folderQueryKeyFn } from "../../../../../Folder/useFolder";
import { queryKeyFn as allFoldersQueryKeyFn } from "../../../../Layout/Navigation/useAllFolders";
import type FolderInterface from "../../../../../../common/Folder.interface";

export default function useMoveFile({ file: { parentUuid, uuid, isFolder } }) {
  const [showMoveFileModal, setShowMoveFileModal] = useState(false);
  const client = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: moveFile } = useMutation({
    async mutationFn(newParent: FolderInterface) {
      await update(ref(database, `${isFolder ? "folders" : "files"}/${uuid}`), {
        parentUuid: newParent.uuid,
      });
    },
    onSuccess(_, newParent: FolderInterface) {
      if (isFolder) {
        client.invalidateQueries({ queryKey: allFoldersQueryKeyFn() });
      }
      if (parentUuid) {
        client.invalidateQueries({
          queryKey: folderQueryKeyFn({ uuid: parentUuid }),
        });
      }
      navigate(
        newParent.uuid ? `/vault/folder/${newParent.uuid}` : "/vault/all-files",
      );
    },
  });

  return {
    toggleMoveFileModal() {
      setShowMoveFileModal(!showMoveFileModal);
    },
    showMoveFileModal,
    moveFile,
  };
}
