import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiArrowsOut, PiTextbox, PiTrash } from "react-icons/pi";

import ActionButton from "./ActionButton";

export default function File({ file, showParent }) {
  return (
    <Table.Row className="group bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Link to={`/vault/${file.parent}/${file.name}`}>{file.name}</Link>
      </Table.Cell>
      {showParent && (
        <Table.Cell className="hidden lg:block">/{file.parent}</Table.Cell>
      )}
      <Table.Cell className="hidden md:block text-nowrap">
        {new Date(file.modified).toDateString()}
      </Table.Cell>
      <Table.Cell>
        <div className="flex flex-row gap-1 justify-end invisible text-right group-hover:visible">
          <ActionButton
            label="Rename"
            Icon={PiTextbox}
            onClick={() => console.log("will rename!")}
          />
          <ActionButton
            label="Move"
            Icon={PiArrowsOut}
            onClick={() => console.log("will move!")}
          />
          <ActionButton
            label="Delete"
            Icon={PiTrash}
            onClick={() => console.log("will delete!")}
          />
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
