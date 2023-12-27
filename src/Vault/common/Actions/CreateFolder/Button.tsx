import { Button, Modal } from "flowbite-react";
import { PiPlus } from "react-icons/pi";

import useCreateFolder from "./useCreateFolder";
import CreateFolderForm from "./Form";

export default function CreateFolderButton({ parent }) {
  const { handleCreateFolder, showCreateFolderModal, toggleCreateFolderModal } =
    useCreateFolder({ parent });

  return (
    <>
      <Button
        pill
        color="light"
        outline
        size="xl"
        onClick={toggleCreateFolderModal}
      >
        <PiPlus className="mr-2 h-5 w-5" />
        Create Folder
      </Button>
      <Modal show={showCreateFolderModal} onClose={toggleCreateFolderModal}>
        <Modal.Header>Create Folder</Modal.Header>
        <Modal.Body>
          <CreateFolderForm onSubmit={handleCreateFolder} />
        </Modal.Body>
      </Modal>
    </>
  );
}
