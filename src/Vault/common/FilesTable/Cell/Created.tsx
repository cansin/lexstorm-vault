import { Table } from "flowbite-react";

import DeleteButton from "./Actions/Delete/Delete";

export default function CreatedCell({ file }) {
  return (
    <Table.Cell className="hidden lg:table-cell">
      <div className="flex flex-row items-center gap-2">
        {file.created && new Date(file.created).toDateString()}
        {!file.deleted && (
          <div className="invisible group-hover:visible">
            <DeleteButton file={file} />
          </div>
        )}
      </div>
    </Table.Cell>
  );
}
