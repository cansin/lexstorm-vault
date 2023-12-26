import { RouterProvider } from "react-router-dom";
import { Spinner } from "flowbite-react";

import router from "./router";

export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <Spinner aria-label="Loading..." className="block mx-auto" />
      }
    />
  );
}
