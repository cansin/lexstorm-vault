import React from "react";
import { createRoot } from "react-dom/client";
import { Flowbite } from "flowbite-react";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Flowbite theme={{ theme }}>
        <App />
      </Flowbite>
    </QueryClientProvider>
  </React.StrictMode>,
);
