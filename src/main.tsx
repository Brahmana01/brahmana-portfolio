import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/certificates.css";
import "./styles/experience.css";
import "./styles/education.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/performance.css";
import "./styles/sidebar-layout.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
