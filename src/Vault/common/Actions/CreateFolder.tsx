import { Button } from "flowbite-react";
import { PiPlus } from "react-icons/pi";

export default function CreateFolderButton() {
  return (
    <Button pill color="light" outline size="xl">
      <PiPlus className="mr-2 h-5 w-5" />
      Create Folder
    </Button>
  );
}
