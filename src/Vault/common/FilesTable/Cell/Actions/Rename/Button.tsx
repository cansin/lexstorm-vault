import { PiTextbox } from "react-icons/pi";

import ActionButton from "../Button";

export default function RenameFileButton({ onClick }) {
  return <ActionButton label="Rename" Icon={PiTextbox} onClick={onClick} />;
}
