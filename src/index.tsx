import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Flowbite>
    </QueryClientProvider>
  </React.StrictMode>,
);
