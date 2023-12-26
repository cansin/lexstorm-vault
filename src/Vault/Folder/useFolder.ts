import { useQuery } from "@tanstack/react-query";

import randomDate from "../../common/randomDate";

function mockResponse({ parent, name }) {
  return {
    uuid: crypto.randomUUID(),
    name,
    parent,
    children: [
      {
        uuid: crypto.randomUUID(),
        name: "2023 Litigation Overview.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "M&A Strategy Guide.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Real Estate Contract Template.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Intellectual Property Rights.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Employment Law Basics.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Recruitment Policy Manual.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Q1 Financial Report 2023.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Board Meeting Summary Jan 2023.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "Adams vs National Bank Analysis.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
      },
      {
        uuid: crypto.randomUUID(),
        name: "2023 HR Handbook.pdf",
        src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
        modified: randomDate(),
        parent: `${parent}/${name}`,
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

export default function useFolder({ parent, name }) {
  const query = useQuery({
    queryKey: [`folder-${parent}-${name}`],
    queryFn: () => fetchFolder({ parent, name }),
  });

  return { ...query };
}
