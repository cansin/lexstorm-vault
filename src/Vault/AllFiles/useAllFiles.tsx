import { useQuery } from "@tanstack/react-query";

import randomDate from "../../common/randomDate";

const mockResponse = {
  items: [
    {
      uuid: crypto.randomUUID(),
      name: "2023 Litigation Overview.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Case Files/2023 Litigations",
    },
    {
      uuid: crypto.randomUUID(),
      name: "M&A Strategy Guide.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Case Files/Mergers & Acquisitions",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Real Estate Contract Template.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Case Files/Real Estate Contracts",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Intellectual Property Rights.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Case Files/Intellectual Property",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Employment Law Basics.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Case Files/Employment Law",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Recruitment Policy Manual.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Internal Documents/HR Policies/Recruitment",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Q1 Financial Report 2023.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Internal Documents/Financial Reports/2023/Q1",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Board Meeting Summary Jan 2023.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Internal Documents/Meeting Minutes/Board Meetings/2023",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Adams vs National Bank Analysis.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Internal Documents/2022 Archive/Litigation Cases",
    },
    {
      uuid: crypto.randomUUID(),
      name: "2023 HR Handbook.pdf",
      src: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: randomDate(),
      parent: "Internal Documents/HR Policies/Employee Handbook",
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

export default function useAllFiles() {
  const query = useQuery({ queryKey: ["all-files"], queryFn: fetchAllFiles });
  return { ...query };
}
