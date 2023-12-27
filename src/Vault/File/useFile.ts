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

function fetchFile({ parent, name }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse({ parent, name }));
    }, 30);
  });
}

export function queryKeyFn({ parent, name }) {
  return [`file-${parent}/${name}`];
}

export default function useFile({ file }) {
  const query = useQuery({
    queryKey: queryKeyFn(file),
    queryFn: () => fetchFile(file),
  });

  return { ...query };
}
