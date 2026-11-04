import { experience } from "../data/experience";

import PageContainer from "../components/layout/PageContainer";
import ExperienceCard from "../components/experience/ExperienceCard";

export default function ExperienceSection() {
  const sortedExperiences = [...experience].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section
      className="section experience-section"
      id="experience"
    >
      <PageContainer>
        <div className="section-heading">
          <div>
            <p className="hero-eyebrow">
              BEYOND THE CODE
            </p>

            <h2 className="section-title">
              Experience & Leadership
            </h2>

            <p className="section-description">
              Research contributions, organizational
              leadership, and experiences that have
              shaped my professional journey.
            </p>
          </div>
        </div>

        <div className="experience-grid">
          {sortedExperiences.map((item, index) => (
            <ExperienceCard
              key={item.id}
              experience={item}
              index={index}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
