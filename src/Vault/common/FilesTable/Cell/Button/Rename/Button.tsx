import { PiTextbox } from "react-icons/pi";

import ActionButton from "../Action";

export default function RenameFileButton({ onClick }) {
  return <ActionButton label="Rename" Icon={PiTextbox} onClick={onClick} />;
}
