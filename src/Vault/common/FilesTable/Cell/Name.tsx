import { Table } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { PiFilePdf, PiFolder } from "react-icons/pi";

import RenameFileButton from "./Button/Rename/Button";
import RenameFileForm from "./Button/Rename/Form";
import MoveButton from "./Button/Move";
import DeleteButton from "./Button/Delete";
import useRenameFile from "./Button/Rename/useRenameFile";

export default function NameCell({ file, hideMoveButton }) {
  const { handleRenameFile, showRenameFileField, toggleRenameFileField } =
    useRenameFile({ file });

  return (
    <Table.Cell className="font-medium text-gray-900">
      <div className="flex flex-row items-center gap-2">
        {showRenameFileField ? (
          <RenameFileForm
            file={file}
            onCancel={toggleRenameFileField}
            onSubmit={handleRenameFile}
          />
        ) : (
          <Link
            to={`/vault/${file.isFolder ? "folder" : "file"}/${
              file.parentUuid
            }/${file.uuid}`}
          >
            <span className="flex flex-row gap-2 items-center">
              {file.isFolder ? <PiFolder /> : <PiFilePdf />}
              {file.filename}
            </span>
          </Link>
        )}
        {!file.deleted && (
          <span className="flex flex-row grow-0 gap-1 invisible text-right group-hover:visible">
            {!showRenameFileField && (
              <RenameFileButton onClick={toggleRenameFileField} />
            )}
            <span
              className={twMerge(
                "invisible group-hover:xl:invisible group-hover:visible",
                hideMoveButton ? "" : "group-hover:xl:visible",
              )}
            >
              <MoveButton />
            </span>
            <span className="invisible group-hover:lg:invisible group-hover:visible">
              <DeleteButton file={file} />
            </span>
          </span>
        )}
      </div>
    </Table.Cell>
  );
}
