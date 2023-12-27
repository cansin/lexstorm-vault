import { Table } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import RenameButton from "./Button/Rename";
import MoveButton from "./Button/Move";
import DeleteButton from "./Button/Delete";

export default function NameCell({ file, hideMoveButton }) {
  return (
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
      <div className="flex flex-row items-center gap-2">
        <Link to={`/vault/file/${file.parent}/${file.uuid}`}>{file.name}</Link>
        <span className="flex flex-row grow-0 gap-1 invisible text-right group-hover:visible">
          <RenameButton file={file} />
          <span
            className={twMerge(
              "invisible group-hover:xl:invisible group-hover:visible",
              hideMoveButton ? "" : "group-hover:xl:visible",
            )}
          >
            <MoveButton file={file} />
          </span>
          <span className="invisible group-hover:lg:invisible group-hover:visible">
            <DeleteButton file={file} />
          </span>
        </span>
      </div>
    </Table.Cell>
  );
}
