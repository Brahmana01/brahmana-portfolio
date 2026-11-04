import { NavLink } from "react-router-dom";
import PageContainer from "./PageContainer";
import ThemeToggle from "../ui/ThemeToggle";
import type { ThemeMode } from "../../types/portfolio";

type NavbarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const navigation = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Certificates", path: "/certificates" },
];

export default function Navbar({
  theme,
  onToggleTheme,
}: NavbarProps) {
  return (
    <header className="site-header">
      <PageContainer>
        <nav className="navbar" aria-label="Main navigation">
          <NavLink to="/" className="nav-brand">
            BP<span>.</span>
          </NavLink>

          <div className="nav-actions">
            <div className="nav-links">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="nav-link"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
            />
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}
