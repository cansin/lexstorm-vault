import FileHeader from "./Header";
import FileViewer from "./Viewer";

export default function FilePage() {
  const file = {
    uuid: crypto.randomUUID(),
    name: "Board Meeting Summary Jan 2023.pdf",
    src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
    modified: "2023-01-08",
    parent: "Internal Documents/Meeting Minutes/Board Meetings/2023",
  };

  return (
    <div className="grow overflow-y-auto">
      <FileHeader file={file} />
      <FileViewer file={file} />
    </div>
  );
}
