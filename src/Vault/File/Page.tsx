import { Document, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export default function FilePage() {
  return (
    <div className="p-4 grow overflow-y-auto">
      <Document
        file="https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf"
        options={{ withCredentials: true }}
      />
    </div>
  );
}
