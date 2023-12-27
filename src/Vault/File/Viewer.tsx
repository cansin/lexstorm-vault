export default function FileViewer({ file }) {
  return (
    <embed src={file.url} width="100%" height="100%" type="application/pdf" />
  );
}
