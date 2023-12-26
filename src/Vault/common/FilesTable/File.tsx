import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function File({ file }) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Link to={`/vault/${file.parent}/${file.name}`}>{file.name}</Link>
      </Table.Cell>
      <Table.Cell>/{file.parent}</Table.Cell>
      <Table.Cell>{new Date(file.modified).toDateString()}</Table.Cell>
      <Table.Cell>
        <a
          href="src/Vault/common/FilesTable/File#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
  );
}
