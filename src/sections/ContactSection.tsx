import { profile } from "../data/profile";
import PageContainer from "../components/layout/PageContainer";

export default function ContactSection() {
  const socialLinks = profile.socialLinks;

  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <PageContainer>
        <div className="contact-layout">

          {/* CONTACT INTRO */}
          <div className="contact-copy">
            <p className="hero-eyebrow">
              LET'S CONNECT
            </p>

            <h2
              className="contact-title"
              id="contact-title"
            >
              Let's work
              <span> together.</span>
            </h2>

            <p className="contact-description">
              I'm open to internship opportunities,
              entry-level positions, and meaningful
              collaborations. Feel free to reach out
              if you'd like to connect or discuss an idea.
            </p>

            <div className="contact-availability">
              <span
                className="contact-status-dot"
                aria-hidden="true"
              />
              {profile.availabilityLabel}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="button button--primary contact-main-button"
            >
              Contact Me <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <div className="contact-email-group">
              <p className="contact-label">
                HAVE AN OPPORTUNITY?
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="contact-email-link"
                aria-label={`Send email to ${profile.email}`}
              >
                <span>{profile.email}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-divider" />

            <div className="contact-social-group">
              <p className="contact-label">
                FIND ME ONLINE
              </p>

              <div className="contact-socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={`Visit ${link.platform} profile`}
                  >
                    {link.platform}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
