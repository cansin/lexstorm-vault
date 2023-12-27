import { Button, Modal } from "flowbite-react";
import { PiUploadSimple } from "react-icons/pi";

import FilePicker from "./FilePicker";
import useUploadFile from "./useUploadFile";

export default function UploadFileButton() {
  const { handleCreateFiles, showFilePickerModal, toggleFilePickerModal } =
    useUploadFile();

  return (
    <>
      <Button pill color="success" size="xl" onClick={toggleFilePickerModal}>
        <PiUploadSimple className="mr-2 h-5 w-5" />
        Upload File
      </Button>
      <Modal show={showFilePickerModal} onClose={toggleFilePickerModal}>
        <Modal.Header>Upload File</Modal.Header>
        <Modal.Body className="p-0">
          <FilePicker onUploadDone={handleCreateFiles} />
        </Modal.Body>
      </Modal>
    </>
  );
}
