import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiXBold } from "react-icons/pi";

import FileBreadcrumb from "./Breadcrumb";

export default function FileHeader({ file }) {
  return (
    <Navbar className="justify-start" fluid>
      <div className="flex flex-row gap-4 items-center">
        <Link
          className="p-2 text-gray-900 bg-white border border-white hover:border-gray-200 hover:bg-gray-100 hover:text-cyan-700 rounded-full"
          to={-1}
        >
          <PiXBold />
        </Link>
        <FileBreadcrumb file={file} />
      </div>
      <div className="flex flex-row gap-2 mx-auto my-4 xl:mx-0">
        <Button
          pill
          color="gray"
          size="sm"
          onClick={() => console.log("Will move!")}
        >
          Move
        </Button>
        <Button
          pill
          color="gray"
          size="sm"
          onClick={() => console.log("Will delete!")}
        >
          Delete
        </Button>
        <Button
          pill
          color="gray"
          size="sm"
          onClick={() => console.log("Will rename!")}
        >
          Rename
        </Button>
        <Button
          pill
          color="gray"
          size="sm"
          onClick={() => console.log("Will show info!")}
        >
          Info
        </Button>
      </div>
    </Navbar>
  );
}
