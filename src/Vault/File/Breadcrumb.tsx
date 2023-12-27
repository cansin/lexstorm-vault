import { Breadcrumb } from "flowbite-react";
import { PiDatabase } from "react-icons/pi";

export default function FileBreadcrumb({ file }) {
  return (
    <Breadcrumb aria-label="File path">
      <Breadcrumb.Item>
        <PiDatabase />
      </Breadcrumb.Item>
      {file.path
        ?.split("/")
        .map((folder) => (
          <Breadcrumb.Item key={folder}>{folder}</Breadcrumb.Item>
        ))}
      <Breadcrumb.Item>
        <span className="text-lg text-gray-800">{file.filename}</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
