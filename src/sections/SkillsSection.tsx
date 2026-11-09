import PageContainer from "../components/layout/PageContainer";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section
      className="section skills-section"
      id="skills"
    >
      <PageContainer>
        <div className="skills-section__heading">
          <div>
            <p className="hero-eyebrow">
              TECHNICAL EXPERTISE
            </p>

            <h2 className="section-title">
              Skills & Technologies
            </h2>

            <p className="section-description">
              Technologies and tools I use to build,
              develop, and maintain digital solutions.
            </p>
          </div>

          <div className="skills-section__meta">
            CORE TOOLKIT
          </div>
        </div>

        <div className="skills-list">
          {skills.map((group, index) => (
            <div
              className="skills-list__row"
              key={`${group.category}-${index}`}
            >
              <span className="skills-list__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="skills-list__category">
                {group.category}
              </h3>

              <ul className="skills-list__items">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
