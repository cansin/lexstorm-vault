import { useQuery } from "@tanstack/react-query";

import randomDate from "../../common/randomDate";

const mockResponse = {
  items: [
    {
      key: crypto.randomUUID(),
      name: "2023 Litigation Overview.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Case Files/2023 Litigations",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "M&A Strategy Guide.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Case Files/Mergers & Acquisitions",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Real Estate Contract Template.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Case Files/Real Estate Contracts",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Intellectual Property Rights.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Case Files/Intellectual Property",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Employment Law Basics.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Case Files/Employment Law",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Recruitment Policy Manual.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Internal Documents/HR Policies/Recruitment",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Q1 Financial Report 2023.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Internal Documents/Financial Reports/2023/Q1",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Board Meeting Summary Jan 2023.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Internal Documents/Meeting Minutes/Board Meetings/2023",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "Adams vs National Bank Analysis.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Internal Documents/2022 Archive/Litigation Cases",
      modified: randomDate(),
      deleted: null,
    },
    {
      key: crypto.randomUUID(),
      name: "2023 HR Handbook.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      parent: "Internal Documents/HR Policies/Employee Handbook",
      modified: randomDate(),
      deleted: null,
    },
  ],
};

function fetchAllFiles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 30);
  });
}

export function queryKeyFn() {
  return ["all-files"];
}

export default function useAllFiles() {
  const query = useQuery({ queryKey: queryKeyFn(), queryFn: fetchAllFiles });
  return { ...query };
}
