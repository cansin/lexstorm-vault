import { useQuery } from "@tanstack/react-query";

const mockResponse = {
  key: crypto.randomUUID(),
  name: "Cansin Yildiz",
  email: "cansinyildiz@gmail.com",
  image:
    "https://gravatar.com/userimage/9693519/aa1f6f9977041f13cd5077c6224182a6.jpeg",
};

function fetchMe() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 30);
  });
}

export default function useMe() {
  const query = useQuery({ queryKey: ["me"], queryFn: fetchMe });
  return { ...query, logout() {} };
}
