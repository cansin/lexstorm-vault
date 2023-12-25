import { Sidebar } from "flowbite-react";
import { HiFolder } from "react-icons/hi";

export default function Folder({ folder }) {
  if (!folder?.children.length) {
    return (
      <Sidebar.Item href="#" icon={HiFolder}>
        {folder.name}
      </Sidebar.Item>
    );
  }

  return (
    <Sidebar.Collapse icon={HiFolder} label={folder.name}>
      {folder.children.map((folder) => (
        <Folder key={folder.uuid} folder={folder} />
      ))}
    </Sidebar.Collapse>
  );
}
