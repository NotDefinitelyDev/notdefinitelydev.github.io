import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App.tsx";

import Sidebar from "@/components/Sidebar";
import FloatingMenu from "@/components/FloatingMenu";
import ProfileCard from "./components/ProfileCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen lg:justify-center lg:items-start lg:flex lg:gap-10 overflow-hidden">
      <Sidebar />
      <FloatingMenu />
      <ProfileCard />
      <App />
    </div>
  </StrictMode>,
);
