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

export default function useFile({ parent, name }) {
  const query = useQuery({
    queryKey: [`file-${parent}-${name}`],
    queryFn: () => fetchFile({ parent, name }),
  });

  return { ...query };
}
