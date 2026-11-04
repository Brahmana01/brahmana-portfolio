import type { Education } from "../../types/portfolio";

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({
  education,
}: EducationCardProps) {
  const period =
    education.startYear !== null
      ? education.status === "ongoing"
        ? `${education.startYear} — Present`
        : education.endYear !== null
          ? `${education.startYear} — ${education.endYear}`
          : null
      : "Previous";

  const expectedGraduation =
    education.status === "ongoing" && education.endYear !== null
      ? `Expected Graduation: ${education.endYear}`
      : null;

  return (
    <article className="education-item">
      <div className="education-item__header">
        <h3 className="education-item__institution">
          {education.institution}
        </h3>

        {period && (
          <span className="education-item__period">
            {period}
          </span>
        )}
      </div>

      <p className="education-item__field">
        {education.degree} · {education.field}
      </p>

      {education.description && (
        <p className="education-item__description">
          {education.description}
        </p>
      )}

      {expectedGraduation && (
        <p className="education-item__expected">
          {expectedGraduation}
        </p>
      )}

      <p className="education-item__location">
        {education.location}
      </p>

      <div className="education-item__underline" />
    </article>
  );
}
