import type { Experience } from "../../types/portfolio";
import TechBadge from "../ui/TechBadge";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <article className="experience-item">
      <div className="experience-item__index">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="experience-item__content">
        <p className="experience-item__role">
          {experience.role}
        </p>

        <h3 className="experience-item__title">
          {experience.title}
        </h3>

        <p className="experience-item__organization">
          {experience.organization}
        </p>

        <p className="experience-item__description">
          {experience.description}
        </p>

        {experience.highlights.length > 0 && (
          <ul className="experience-item__highlights">
            {experience.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}

        {experience.technologies.length > 0 && (
          <div className="experience-item__technologies">
            {experience.technologies.map((technology) => (
              <TechBadge
                key={technology}
                label={technology}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
