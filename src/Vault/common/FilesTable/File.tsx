import { Table } from "flowbite-react";

import ModifiedCell from "./Cell/Modified";
import NameCell from "./Cell/Name";
import ParentFolderCell from "./Cell/ParentFolder";

export default function File({ file, showParent }) {
  return (
    <Table.Row className="group bg-white dark:border-gray-700 dark:bg-gray-800">
      <NameCell file={file} hideMoveButton={showParent} />
      {showParent && <ParentFolderCell file={file} />}
      <ModifiedCell file={file} />
    </Table.Row>
  );
}
