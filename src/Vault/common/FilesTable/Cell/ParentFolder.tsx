import { Table } from "flowbite-react";

import MoveButton from "./Button/Move";

export default function ParentFolderCell({ file }) {
  return (
    <Table.Cell className="hidden xl:table-cell">
      <div className="flex flex-row items-center gap-2">
        /{file.parentUuid}
        {!file.deleted && (
          <div className="invisible group-hover:visible">
            <MoveButton />
          </div>
        )}
      </div>
    </Table.Cell>
  );
}
