import type { ReactNode } from "react";
import type { ThemeMode } from "../../types/portfolio";

import ProfileSidebar from "./ProfileSidebar";
import Footer from "./Footer";

type PortfolioLayoutProps = {
  children: ReactNode;
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export default function PortfolioLayout({
  children,
  theme,
  onToggleTheme,
}: PortfolioLayoutProps) {
  return (
    <div className="page-wrapper portfolio-page">
      <div className="portfolio-layout">
        <main className="main-content portfolio-main">
          <div className="portfolio-main__content">
            {children}
          </div>

          <Footer />
        </main>

        <ProfileSidebar
          theme={theme}
          onToggleTheme={onToggleTheme}
        />
      </div>
    </div>
  );
}
