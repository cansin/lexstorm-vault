import { Table } from "flowbite-react";

import DeleteButton from "./Button/Delete";

export default function ModifiedCell({ file }) {
  return (
    <Table.Cell className="hidden lg:table-cell">
      <div className="flex flex-row items-center gap-2">
        {file.modified?.toDateString()} -{file.deleted?.toDateString()}
        <div className="invisible group-hover:visible">
          <DeleteButton file={file} />
        </div>
      </div>
    </Table.Cell>
  );
}
