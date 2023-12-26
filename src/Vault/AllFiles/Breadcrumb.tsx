import { Breadcrumb } from "flowbite-react";
import { PiDatabaseBold } from "react-icons/pi";

export default function AllFilesBreadcrumb() {
  return (
    <Breadcrumb className="pb-4" aria-label="File path">
      <Breadcrumb.Item>
        <PiDatabaseBold className="text-lg" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <span className="text-2xl text-gray-800">All Files</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
