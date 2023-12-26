import { Spinner, Table } from "flowbite-react";

import useAllFiles from "./useAllFiles";
import File from "./File";

export default function FilesTable() {
  const { isLoading, isError, data, error } = useAllFiles();

  return (
    <Table hoverable striped>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Parent Folder</Table.HeadCell>
        <Table.HeadCell>Modified</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {isLoading && (
          <Table.Row>
            <Table.Cell colSpan={3}>
              <Spinner
                aria-label="Loading folders...."
                className="block mx-auto"
              />
            </Table.Cell>
          </Table.Row>
        )}

        {!isLoading &&
          !isError &&
          data.items.map((file) => <File key={file.uuid} file={file} />)}

        {!isLoading && isError && (
          <Table.Row>
            <Table.Cell colSpan={3}>{error}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
