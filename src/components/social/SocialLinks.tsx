import { profile } from "../../data/profile";

export default function SocialLinks() {
  return (
    <div className="social-links">
      {profile.socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={`Visit Brahmana's ${social.platform}`}
        >
          {social.platform}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
