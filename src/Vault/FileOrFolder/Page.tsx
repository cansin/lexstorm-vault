import { useParams } from "react-router-dom";

import FilePage from "../File/Page";
import FolderPage from "../Folder/Page";
import Layout from "../common/Layout/Layout";

export default function FileOrFolderPage() {
  const { "*": splat } = useParams();
  const [parents, uuid] = [
    splat.split("/").slice(0, -1),
    splat.split("/").at(-1),
  ];

  if (uuid.toLowerCase().endsWith(".pdf")) {
    return <FilePage path={parents.join("/")} uuid={uuid} />;
  }

  return (
    <Layout>
      <FolderPage path={parents.join("/")} uuid={uuid} />
    </Layout>
  );
}
