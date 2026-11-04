import { skills } from "../data/skills";

import PageContainer from "../components/layout/PageContainer";
import TechBadge from "../components/ui/TechBadge";

export default function SkillsSection() {
  return (
    <section
      className="section skills-section"
      id="skills"
    >
      <PageContainer>
        <div className="section-heading">
          <div>
            <p className="hero-eyebrow">
              MY TECHNICAL TOOLKIT
            </p>

            <h2 className="section-title">
              Skills & Technologies
            </h2>

            <p className="section-description">
              Technologies and tools I work with across
              different areas of software development.
            </p>
          </div>

          <span className="skills-level">
            Intermediate Level
          </span>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <article
              className="skill-card"
              key={group.category}
            >
              <div className="skill-card__header">
                <h3 className="skill-card__title">
                  {group.category}
                </h3>

                <span className="skill-card__count">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="skill-card__list">
                {group.skills.map((skill) => (
                  <TechBadge
                    key={skill}
                    label={skill}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
