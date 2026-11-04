import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import { useTheme } from "./hooks/useTheme";

import PortfolioLayout from "./components/layout/PortfolioLayout";

const HomePage = lazy(
  () => import("./pages/HomePage")
);

const ProjectsPage = lazy(
  () => import("./pages/ProjectsPage")
);

const ProjectDetailPage = lazy(
  () => import("./pages/ProjectDetailPage")
);

const CertificatesPage = lazy(
  () => import("./pages/CertificatesPage")
);

import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <PortfolioLayout
        theme={theme}
        onToggleTheme={toggleTheme}
      >
        <Suspense
          fallback={
            <div className="route-loading">
              Loading page...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/projects"
              element={<ProjectsPage />}
            />

            <Route
              path="/projects/:projectId"
              element={<ProjectDetailPage />}
            />

            <Route
              path="/certificates"
              element={<CertificatesPage />}
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </Suspense>
      </PortfolioLayout>
    </BrowserRouter>
  );
}

export default App;
