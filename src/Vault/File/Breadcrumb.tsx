import { Breadcrumb } from "flowbite-react";
import { PiDatabaseBold } from "react-icons/pi";

export default function FileBreadcrumb({ file }) {
  return (
    <Breadcrumb aria-label="File path">
      <Breadcrumb.Item>
        <PiDatabaseBold />
      </Breadcrumb.Item>
      {file.parent.split("/").map((folder) => (
        <Breadcrumb.Item key={folder}>{folder}</Breadcrumb.Item>
      ))}
      <Breadcrumb.Item>
        <span className="text-lg text-gray-800">{file.name}</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
