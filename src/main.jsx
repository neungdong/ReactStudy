// import App from "@/App";
// import React from "react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "@/App";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
