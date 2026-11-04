import { NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";
import type { ThemeMode, SocialLink } from "../../types/portfolio";
import type { IconType } from "react-icons";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaFileArrowDown,
} from "react-icons/fa6";

type ProfileSidebarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const socialIcons: Record<SocialLink["platform"], IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  X: FaXTwitter,
};

export default function ProfileSidebar({
  theme,
  onToggleTheme,
}: ProfileSidebarProps) {
  return (
    <aside className="portfolio-sidebar">
      <div className="portfolio-sidebar__inner">
        <div className="sidebar-profile">
          <div className="sidebar-profile__photo">
            {profile.photo ? (
              <img src={profile.photo} alt="Portrait of Brahmana Purba, Information Technology student and developer" />
            ) : (
              <span>BP</span>
            )}
          </div>

          <h2 className="sidebar-profile__name">
            {profile.name}
          </h2>

          <p className="sidebar-profile__role">
            {profile.headline}
          </p>
        </div>

        <nav
          className="sidebar-navigation"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sidebar-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            <span className="sidebar-nav__symbol">⌂</span>
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `sidebar-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            <span className="sidebar-nav__symbol">▤</span>
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `sidebar-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            <span className="sidebar-nav__symbol">✧</span>
            <span>Certificates</span>
          </NavLink>

          <a
            href={`${import.meta.env.BASE_URL}documents/cv/Brahmana-Purba-CV.pdf`}
            download="Brahmana-Purba-CV.pdf"
            className="sidebar-nav__link"
            aria-label="Download CV"
          >
            <span className="sidebar-nav__symbol">
              <FaFileArrowDown aria-hidden="true" />
            </span>
            <span>Resume</span>
          </a>
        </nav>

        <div className="sidebar-social">
          {profile.socialLinks.map((social) => {
            const SocialIcon = socialIcons[social.platform];

            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                title={social.platform}
                className="sidebar-social__link"
              >
                <SocialIcon
                  aria-hidden="true"
                  focusable="false"
                />
              </a>
            );
          })}
        </div>

        <div className="sidebar-theme">
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
          />
        </div>
      </div>
    </aside>
  );
}
