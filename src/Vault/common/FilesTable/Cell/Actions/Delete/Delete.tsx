import { PiTrash } from "react-icons/pi";

import ActionButton from "../Button";

import useDeleteFile from "./useDeleteFile";

export default function DeleteButton({ file }) {
  const { deleteFile } = useDeleteFile({ file });

  return <ActionButton label="Delete" Icon={PiTrash} onClick={deleteFile} />;
}
