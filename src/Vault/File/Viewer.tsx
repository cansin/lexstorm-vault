export default function FileViewer({ file }) {
  return (
    <embed src={file.src} width="100%" height="100%" type="application/pdf" />
  );
}
