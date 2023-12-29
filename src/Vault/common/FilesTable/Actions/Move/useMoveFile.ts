import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";

import { database } from "@/common/firebase";
import type FolderInterface from "@/common/Folder.interface";
import { allFoldersKey, folderKey } from "@/common/queryKeys";

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
        client.invalidateQueries({ queryKey: allFoldersKey() });
      }
      if (parentUuid) {
        client.invalidateQueries({
          queryKey: folderKey({ uuid: parentUuid }),
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
