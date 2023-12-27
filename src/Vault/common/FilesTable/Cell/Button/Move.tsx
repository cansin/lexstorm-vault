import { PiArrowsOut } from "react-icons/pi";

import ActionButton from "./Action";

export default function MoveButton() {
  return (
    <ActionButton
      label="Move"
      Icon={PiArrowsOut}
      onClick={() => console.log("will move!")}
    />
  );
}
