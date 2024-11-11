import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "@/styles/reset.css";
import "@/styles/global.css";
import App from "./App.tsx";
import Navigation from "@/pages/Navigation.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Navigation />} />
    </Route>,
  ),
  {
    future: {
      v7_fetcherPersist: true,
    },
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  </StrictMode>,
);
