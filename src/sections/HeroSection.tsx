import { profile } from "../data/profile";
import Button from "../components/ui/Button";
import PageContainer from "../components/layout/PageContainer";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <PageContainer>
        <div className="hero-layout hero-layout--single">
          <div className="hero-content">
            <p className="hero-eyebrow">
              INFORMATION TECHNOLOGY STUDENT
            </p>

            <h1 className="hero-title">
              Hi, I'm <span>{profile.name}</span>.
            </h1>

            <h2 className="hero-subtitle">
              {profile.headline}
            </h2>

            <div className="hero-description">
              <p>{profile.about[0]}</p>
            </div>

            <p className="availability-label">
              <span className="availability-dot" />
              {profile.availabilityLabel}
            </p>

            <div className="hero-actions">
              <Button href="#projects">
                Explore Projects <span aria-hidden="true">↗</span>
              </Button>

              <Button
                href="#contact"
                variant="secondary"
              >
                Let's Connect <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
