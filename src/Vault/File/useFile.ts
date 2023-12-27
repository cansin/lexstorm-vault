import { useQuery } from "@tanstack/react-query";

import randomDate from "../../common/randomDate";

function mockResponse({ parent, name }) {
  return {
    uuid: crypto.randomUUID(),
    name,
    src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
    modified: randomDate().toString(),
    parent,
  };
}

function fetchFile({ path, uuid }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse({ path, uuid }));
    }, 30);
  });
}

export function queryKeyFn({ path, uuid }) {
  return [`file-${path}/${uuid}`];
}

export default function useFile({ file }) {
  const { data: path, ...rest } = useQuery({
    queryKey: queryKeyFn(file),
    queryFn: () => fetchFile(file),
  });

  return { path, ...rest };
}
