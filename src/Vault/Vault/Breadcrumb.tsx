import { Breadcrumb } from "flowbite-react";
import { PiDatabase } from "react-icons/pi";

export default function VaultBreadcrumb({ label }) {
  return (
    <Breadcrumb className="pb-4" aria-label="File path">
      <Breadcrumb.Item>
        <PiDatabase className="text-lg" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <span className="text-2xl text-gray-800">{label} Files</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
