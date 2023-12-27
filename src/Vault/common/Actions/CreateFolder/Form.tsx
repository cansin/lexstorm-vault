import { Button, Label, TextInput } from "flowbite-react";
import { Field, Form, Formik } from "formik";

export default function CreateFolderForm({ onSubmit }) {
  return (
    <Formik initialValues={{ filename: "" }} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-4 max-w-xl mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="filename" value="Name" />
          </div>

          <Field
            as={TextInput}
            id="filename"
            name="filename"
            type="text"
            placeholder="Folder Name"
            required
          />
        </div>

        <Button type="submit">Create</Button>
      </Form>
    </Formik>
  );
}
