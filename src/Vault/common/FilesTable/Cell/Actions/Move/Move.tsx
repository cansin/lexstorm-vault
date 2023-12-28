import { Modal } from "flowbite-react";
import { PiArrowsOut } from "react-icons/pi";

import ActionButton from "../Button";

import useMoveFile from "./useMoveFile";
import Navigation from "./Navigation";

export default function MoveButton({ file }) {
  const { moveFile, showMoveFileModal, toggleMoveFileModal } = useMoveFile({
    file,
  });

  return (
    <>
      <ActionButton
        label="Move"
        Icon={PiArrowsOut}
        onClick={toggleMoveFileModal}
      />
      <Modal show={showMoveFileModal} onClose={toggleMoveFileModal}>
        <Modal.Header>Move File</Modal.Header>
        <Modal.Body>
          <Navigation onClick={moveFile} />
        </Modal.Body>
      </Modal>
    </>
  );
}
