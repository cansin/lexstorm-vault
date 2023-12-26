import { useQuery } from "@tanstack/react-query";

const mockResponse = {
  items: [
    {
      uuid: crypto.randomUUID(),
      name: "2023 Litigation Overview.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
      modified: "2023-01-15",
      parent: "Case Files/2023 Litigations",
    },
    {
      uuid: crypto.randomUUID(),
      name: "M&A Strategy Guide.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-download-10-mb.pdf",
      modified: "2023-02-10",
      parent: "Case Files/Mergers & Acquisitions",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Real Estate Contract Template.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-with-images.pd",
      modified: "2023-03-05",
      parent: "Case Files/Real Estate Contracts",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Intellectual Property Rights.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
      modified: "2023-01-20",
      parent: "Case Files/Intellectual Property",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Employment Law Basics.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-download-10-mb.pdf",
      modified: "2023-02-28",
      parent: "Case Files/Employment Law",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Recruitment Policy Manual.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-with-images.pd",
      modified: "2023-03-10",
      parent: "Internal Documents/HR Policies/Recruitment",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Q1 Financial Report 2023.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
      modified: "2023-04-02",
      parent: "Internal Documents/Financial Reports/2023/Q1",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Board Meeting Summary Jan 2023.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-download-10-mb.pdf",
      modified: "2023-01-08",
      parent: "Internal Documents/Meeting Minutes/Board Meetings/2023",
    },
    {
      uuid: crypto.randomUUID(),
      name: "Adams vs National Bank Analysis.pdf",
      url: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-with-images.pd",
      modified: "2023-03-22",
      parent: "Internal Documents/2022 Archive/Litigation Cases",
    },
    {
      uuid: crypto.randomUUID(),
      name: "2023 HR Handbook.pdf",
      url: "https://cdn.filestackcontent.com/O7oBXd8hRfW9cyVpqbe6",
      modified: "2023-02-15",
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
