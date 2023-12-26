import { useState } from "react";

export default function useFilePicker() {
  const [showFilePicker, setShowFilePicker] = useState(false);

  return {
    toggleFilePicker() {
      setShowFilePicker(!showFilePicker);
    },
    showFilePicker,
  };
}
