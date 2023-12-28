import { useQuery } from "@tanstack/react-query";

import type UserInterface from "./User.interface";

const mockResponse = {
  uuid: crypto.randomUUID(),
  name: "Cansin Yildiz",
  email: "cansinyildiz@gmail.com",
  image:
    "https://gravatar.com/userimage/9693519/aa1f6f9977041f13cd5077c6224182a6.jpeg",
};

function fetchMe(): Promise<UserInterface> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 30);
  });
}

export default function useMe() {
  const { data: user, ...rest } = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
  });
  return { user, ...rest, logout() {} };
}
