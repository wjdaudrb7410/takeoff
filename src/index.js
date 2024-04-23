import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "./themeProvider";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
