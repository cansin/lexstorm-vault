import { Button, Modal, Spinner } from "flowbite-react";
import { PiUploadSimple } from "react-icons/pi";
import { lazy, Suspense } from "react";

import useUploadFile from "./useUploadFile";

const FilePicker = lazy(() => import("./FilePicker.js"));

export default function UploadFileButton({ parent }) {
  const { handleCreateFiles, showFilePickerModal, toggleFilePickerModal } =
    useUploadFile({ parent });

  return (
    <>
      <Button pill color="success" size="xl" onClick={toggleFilePickerModal}>
        <PiUploadSimple className="mr-2 h-5 w-5" />
        Upload File
      </Button>
      <Modal show={showFilePickerModal} onClose={toggleFilePickerModal}>
        <Modal.Header>Upload File</Modal.Header>
        <Modal.Body className="p-0">
          <Suspense
            fallback={
              <Spinner
                aria-label="Loading file picker...."
                className="block mx-auto"
              />
            }
          >
            <FilePicker onUploadDone={handleCreateFiles} />
          </Suspense>
        </Modal.Body>
      </Modal>
    </>
  );
}
