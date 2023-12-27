import { useQuery } from "@tanstack/react-query";

import randomDate from "../../common/randomDate";

function mockResponse({ parent, name }) {
  return {
    key: crypto.randomUUID(),
    name,
    parent,
    children: [
      {
        key: crypto.randomUUID(),
        name: "2023 Litigation Overview.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "M&A Strategy Guide.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Real Estate Contract Template.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Intellectual Property Rights.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Employment Law Basics.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Recruitment Policy Manual.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Q1 Financial Report 2023.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Board Meeting Summary Jan 2023.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "Adams vs National Bank Analysis.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
      {
        key: crypto.randomUUID(),
        name: "2023 HR Handbook.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        parent: `${parent}/${name}`,
        modified: randomDate(),
        deleted: null,
      },
    ],
  };
}

function fetchFolder({ parent, name }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse({ parent, name }));
    }, 30);
  });
}

export function queryKeyFn({ parent, name }) {
  return [`folder-${parent}/${name}`];
}

export default function useFolder({ folder }) {
  const query = useQuery({
    queryKey: queryKeyFn(folder),
    queryFn: () => fetchFolder(folder),
  });

  return { ...query };
}
