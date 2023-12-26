import { PickerInline } from "filestack-react";

import "./FilePicker.css";

export default function FilePicker({ onUploadDone }) {
  return (
    <PickerInline
      apikey={import.meta.env.VITE_FILESTACK_API_KEY}
      onUploadDone={onUploadDone}
      pickerOptions={{
        accept: ["application/pdf"],
        fromSources: [
          "local_file_system",
          "url",
          "googledrive",
          "dropbox",
          "box",
          "onedrive",
        ],
      }}
    />
  );
}
