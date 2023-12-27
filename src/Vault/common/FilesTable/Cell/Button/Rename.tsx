import { PiTextbox } from "react-icons/pi";

import ActionButton from "./Action";

export default function RenameButton() {
  return (
    <ActionButton
      label="Rename"
      Icon={PiTextbox}
      onClick={() => console.log("will rename!")}
    />
  );
}
