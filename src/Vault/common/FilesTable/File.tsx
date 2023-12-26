import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiArrowsOut, PiTextbox, PiTrash } from "react-icons/pi";

import ActionButton from "./ActionButton";

export default function File({ file }) {
  return (
    <Table.Row className="group bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Link to={`/vault/${file.parent}/${file.name}`}>{file.name}</Link>
      </Table.Cell>
      <Table.Cell>/{file.parent}</Table.Cell>
      <Table.Cell>{new Date(file.modified).toDateString()}</Table.Cell>
      <Table.Cell>
        <div className="flex flex-row gap-1 invisible text-right group-hover:visible">
          <ActionButton label="Rename" Icon={PiTextbox} />
          <ActionButton label="Move" Icon={PiArrowsOut} />
          <ActionButton label="Delete" Icon={PiTrash} />
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
