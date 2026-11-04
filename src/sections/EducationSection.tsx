import { education } from "../data/education";

import PageContainer from "../components/layout/PageContainer";
import EducationCard from "../components/education/EducationCard";

export default function EducationSection() {
  return (
    <section
      className="section education-section"
      id="education"
    >
      <PageContainer>
        <div className="section-heading">
          <div>
            <p className="hero-eyebrow">
              ACADEMIC BACKGROUND
            </p>

            <h2 className="section-title">
              Education
            </h2>

            <p className="section-description">
              My academic journey and educational background.
            </p>
          </div>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <EducationCard
              key={item.institution}
              education={item}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
