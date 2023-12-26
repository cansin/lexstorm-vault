import { Table } from "flowbite-react";

import File from "./File";

export default function FilesTable({ files }) {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Parent Folder</Table.HeadCell>
        <Table.HeadCell>Modified</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Actions</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {files.map((file) => (
          <File key={file.uuid} file={file} />
        ))}
      </Table.Body>
    </Table>
  );
}
