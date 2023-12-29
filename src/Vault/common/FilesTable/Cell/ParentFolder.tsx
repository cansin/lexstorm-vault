import { Table } from "flowbite-react";

import MoveButton from "../Actions/Move/Move";

export default function ParentFolderCell({ file }) {
  return (
    <Table.Cell className="hidden xl:table-cell">
      <div className="flex flex-row items-center gap-2">
        /{file.parentUuid}
        {!file.deleted && (
          <div className="invisible group-hover:visible">
            <MoveButton file={file} />
          </div>
        )}
      </div>
    </Table.Cell>
  );
}
