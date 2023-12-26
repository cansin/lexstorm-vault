import { useQuery } from "@tanstack/react-query";

const mockResponse = {
  items: [
    {
      uuid: crypto.randomUUID(),
      name: "Case Files",
      children: [
        { uuid: crypto.randomUUID(), name: "2023 Litigations", children: [] },
        {
          uuid: crypto.randomUUID(),
          name: "Mergers & Acquisitions",
          children: [],
        },
        {
          uuid: crypto.randomUUID(),
          name: "Real Estate Contracts",
          children: [],
        },
        {
          uuid: crypto.randomUUID(),
          name: "Intellectual Property",
          children: [],
        },
        { uuid: crypto.randomUUID(), name: "Employment Law", children: [] },
      ],
    },
    {
      uuid: crypto.randomUUID(),
      name: "Internal Documents",
      children: [
        {
          uuid: crypto.randomUUID(),
          name: "HR Policies",
          children: [
            { uuid: crypto.randomUUID(), name: "Recruitment", children: [] },
            {
              uuid: crypto.randomUUID(),
              name: "Employee Handbook",
              children: [],
            },
          ],
        },
        {
          uuid: crypto.randomUUID(),
          name: "Financial Reports",
          children: [
            {
              uuid: crypto.randomUUID(),
              name: "2023",
              children: [
                { uuid: crypto.randomUUID(), name: "Q1", children: [] },
                { uuid: crypto.randomUUID(), name: "Q2", children: [] },
              ],
            },
            {
              uuid: crypto.randomUUID(),
              name: "Meeting Minutes",
              children: [
                {
                  uuid: crypto.randomUUID(),
                  name: "Board Meetings",
                  children: [
                    { uuid: crypto.randomUUID(), name: 2023, children: [] },
                    { uuid: crypto.randomUUID(), name: 2022, children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function fetchAllFolders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 30);
  });
}

export default function useAllFolders() {
  const query = useQuery({
    queryKey: ["all-folders"],
    queryFn: fetchAllFolders,
  });
  return { ...query };
}
