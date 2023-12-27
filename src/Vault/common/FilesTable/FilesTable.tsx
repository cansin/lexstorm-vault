import { Table } from "flowbite-react";

import File from "./File";

export default function FilesTable({ files, showParents = true }) {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        {showParents && (
          <Table.HeadCell className="hidden xl:table-cell">
            Parent Folder
          </Table.HeadCell>
        )}
        <Table.HeadCell className="hidden lg:table-cell">
          Modified
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {files
          .filter((file) => !file.deleted)
          .map((file) => (
            <File key={file.key} file={file} showParent={showParents} />
          ))}
      </Table.Body>
    </Table>
  );
}
