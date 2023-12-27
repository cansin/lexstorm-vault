import { Breadcrumb } from "flowbite-react";
import { PiDatabase } from "react-icons/pi";

export default function FolderBreadcrumb({ folder }) {
  return (
    <Breadcrumb className="pb-4" aria-label="File path">
      <Breadcrumb.Item>
        <PiDatabase className="text-lg" />
      </Breadcrumb.Item>
      {folder?.parent?.split("/").map((parent) => (
        <Breadcrumb.Item key={parent}>
          <span className="text-lg">{parent}</span>
        </Breadcrumb.Item>
      ))}
      <Breadcrumb.Item>
        <span className="text-2xl text-gray-800">{folder.name}</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
