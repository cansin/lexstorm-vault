import { useParams } from "react-router-dom";

import FilePage from "../File/Page";
import FolderPage from "../Folder/Page";
import Layout from "../common/Layout/Layout";

export default function FileOrFolderPage() {
  const { "*": splat } = useParams();
  const [parents, fileOrFolder] = [
    splat.split("/").slice(0, -1),
    splat.split("/").at(-1),
  ];

  if (fileOrFolder.toLowerCase().endsWith(".pdf")) {
    return <FilePage parent={parents.join("/")} name={fileOrFolder} />;
  }

  return (
    <Layout>
      <FolderPage parent={parents.join("/")} name={fileOrFolder} />
    </Layout>
  );
}
