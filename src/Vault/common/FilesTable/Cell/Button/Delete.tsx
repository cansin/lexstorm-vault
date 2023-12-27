import { PiTrash } from "react-icons/pi";

import ActionButton from "./Action";

export default function DeleteButton() {
  return (
    <ActionButton
      label="Delete"
      Icon={PiTrash}
      onClick={() => console.log("will delete!")}
    />
  );
}
