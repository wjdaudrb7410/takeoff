import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
