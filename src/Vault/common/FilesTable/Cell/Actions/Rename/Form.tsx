import { Field, Form, Formik } from "formik";
import { Button, TextInput } from "flowbite-react";
import { PiCheck, PiFilePdf, PiFolder, PiX } from "react-icons/pi";

export default function RenameFileForm({ file, onCancel, onSubmit }) {
  return (
    <Formik initialValues={{ filename: file.filename }} onSubmit={onSubmit}>
      <Form className="grow flex flex-row items-center gap-1">
        <Field
          className="grow"
          as={TextInput}
          name="filename"
          type="text"
          icon={file.isFolder ? PiFolder : PiFilePdf}
          placeholder="Name"
          required
        />
        <div className="flex flex-col gap-1">
          <Button pill color="green" size="xxs" type="submit">
            <PiCheck className="h-3 w-3" />
          </Button>
          <Button pill color="red" size="xxs" onClick={onCancel}>
            <PiX className="h-3 w-3" />
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
