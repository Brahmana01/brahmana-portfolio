import { Link } from "react-router-dom";

import type { Project } from "../../types/portfolio";
import ProjectPlaceholder from "./ProjectPlaceholder";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = project.images[0];

  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card"
      aria-label={`View details for ${project.title}`}
    >
      <div className="project-card__image">
        {coverImage ? (
          <img
            src={coverImage}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ProjectPlaceholder
            title={project.title}
          />
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>

          {project.status === "In Progress" && (
            <span className="project-card__status">
              In Progress
            </span>
          )}
        </div>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="tech-list">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="tech-badge"
            >
              {technology}
            </span>
          ))}
        </div>

        <span className="project-card__link">
          Explore Project
        </span>
      </div>
    </Link>
  );
}
