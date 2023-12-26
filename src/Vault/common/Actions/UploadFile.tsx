import { Button, Modal } from "flowbite-react";
import { PiUploadSimple } from "react-icons/pi";

import FilePicker from "./FilePicker";
import useFilePicker from "./useFilePicker";

export default function UploadFileButton() {
  const { handleUploadDone, showFilePicker, toggleFilePicker } =
    useFilePicker();

  return (
    <>
      <Button pill color="success" size="xl" onClick={toggleFilePicker}>
        <PiUploadSimple className="mr-2 h-5 w-5" />
        Upload File
      </Button>
      <Modal show={showFilePicker} onClose={toggleFilePicker}>
        <Modal.Header>Upload File</Modal.Header>
        <Modal.Body className="p-0">
          <FilePicker onUploadDone={handleUploadDone} />
        </Modal.Body>
      </Modal>
    </>
  );
}
