import { Button, Label, Modal, TextInput } from "flowbite-react";
import { PiPlus } from "react-icons/pi";
import { Field, Form, Formik } from "formik";

import useCreateFolder from "./useCreateFolder";

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
          <Formik initialValues={{ name: "" }} onSubmit={handleCreateFolder}>
            <Form className="flex flex-col gap-4 max-w-xl mx-auto">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>

                <Field
                  as={TextInput}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Folder Name"
                  required
                />
              </div>

              <Button type="submit">Create</Button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
