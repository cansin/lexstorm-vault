import Navigation from "./Navigation/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import theme from "./theme";
import { Flowbite } from "flowbite-react";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Flowbite theme={{ theme }}>
        <div className="flex grow flex-col">
          <Header />
          <div className="flex grow">
            <Navigation />
            <Content />
          </div>
          <Footer />
        </div>
      </Flowbite>
    </QueryClientProvider>
  );
}
