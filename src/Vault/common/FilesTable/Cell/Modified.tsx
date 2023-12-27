import { Table } from "flowbite-react";

import DeleteButton from "./Button/Delete";

export default function ModifiedCell({ file }) {
  return (
    <Table.Cell className="hidden lg:table-cell">
      <div className="flex flex-row items-center gap-2">
        {new Date(file.modified).toDateString()}
        <div className="invisible group-hover:visible">
          <DeleteButton />
        </div>
      </div>
    </Table.Cell>
  );
}
