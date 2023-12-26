import { Button, ButtonGroup, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiArrowsOut, PiTextbox, PiTrash } from "react-icons/pi";

export default function File({ file }) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Link to={`/vault/${file.parent}/${file.name}`}>{file.name}</Link>
      </Table.Cell>
      <Table.Cell>/{file.parent}</Table.Cell>
      <Table.Cell>{new Date(file.modified).toDateString()}</Table.Cell>
      <Table.Cell className="text-right">
        <ButtonGroup>
          <Button
            color="light"
            size="xs"
            onClick={() => console.log("Will rename!")}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            <PiTextbox className="mr-1 h-4 w-4" />
            Rename
          </Button>
          <Button
            color="light"
            size="xs"
            onClick={() => console.log("Will move!")}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            <PiArrowsOut className="mr-1 h-4 w-4" />
            Move
          </Button>
          <Button
            color="light"
            size="xs"
            onClick={() => console.log("Will delete!")}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            <PiTrash className="mr-1 h-4 w-4" />
            Delete
          </Button>
        </ButtonGroup>
      </Table.Cell>
    </Table.Row>
  );
}
