import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import ProjectPlaceholder from "../components/projects/ProjectPlaceholder";
import ProjectImagePreview from "../components/projects/ProjectImagePreview";

import { projects } from "../data/projects";
import usePageMetadata from "../hooks/usePageMetadata";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const project = projects.find(
    (item) => item.id === projectId && item.published
  );

  usePageMetadata({
    title: project
      ? `${project.title} | Brahmana Purba`
      : "Project Not Found | Brahmana Purba",
    description:
      project?.description ?? "The requested project could not be found.",
  });

  if (!project) {
    return (
      <section className="section project-detail">
        <PageContainer>
          <div className="empty-state">
            <h1>Project Not Found</h1>
            <p>The project may have been moved or is unavailable.</p>

            <Link
              to="/projects"
              className="button button--secondary"
            >
              Back to Projects
            </Link>
          </div>
        </PageContainer>
      </section>
    );
  }

  const galleryItems = [1, 2];

  return (
    <>
      <section className="section project-detail">
        <PageContainer>
          <Link
            to="/projects"
            className="project-detail__back"
          >
            ← Back to All Projects
          </Link>

          {/* PROJECT HEADER */}
          <header className="project-detail__header">
            <div className="project-detail__meta">
              <span>{project.category}</span>

              {project.status === "In Progress" && (
                <span className="project-card__status">
                  In Progress
                </span>
              )}
            </div>

            <h1 className="section-title">
              {project.title}
            </h1>

            <p className="section-description">
              {project.description}
            </p>
          </header>

          {/* MAIN PROJECT IMAGE */}
          <div className="project-detail__hero-media">
            {project.images[0] ? (
              <button
                type="button"
                className="project-detail__image-button project-detail__image-button--hero"
                onClick={() => setActiveImageIndex(0)}
                aria-label={`Preview ${project.title} main image`}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} main preview`}
                  fetchPriority="high"
                />
              </button>
            ) : (
              <ProjectPlaceholder
                title={project.title}
                caption="Main Project Preview"
              />
            )}
          </div>

          {/* PROJECT INFORMATION */}
          <div className="project-detail__content">
            {/* OVERVIEW */}
            <section className="project-detail__section">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </section>
          {/* MY ROLE & CONTRIBUTIONS */}
          {project.role && project.contribution && (
            <section className="project-detail__section">
              <h2>My Role &amp; Contributions</h2>

              <div className="tech-list project-detail__technologies">
                <span className="tech-badge">
                  {project.role}
                </span>
              </div>

              <p>{project.contribution}</p>
            </section>
          )}

            {/* KEY FEATURES */}
            {project.features.length > 0 && (
              <section className="project-detail__section">
                <h2>Key Features</h2>

                <ul className="project-detail__features">
                  {project.features.map((feature, index) => (
                    <li key={`${project.id}-feature-${index}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* TECHNOLOGY STACK */}
            {project.technologies.length > 0 && (
              <section className="project-detail__section">
                <h2>Technology Stack</h2>

                <div className="tech-list project-detail__technologies">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="tech-badge"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* PROJECT GALLERY */}
            <section className="project-detail__section">
              <h2>Project Gallery</h2>

              <div className="project-detail__gallery">
                {galleryItems.map((index) => (
                  <div
                    className="project-detail__gallery-item"
                    key={`${project.id}-gallery-${index}`}
                  >
                    {project.images[index] ? (
                      <button
                        type="button"
                        className="project-detail__image-button"
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`Preview ${project.title} image ${index + 1}`}
                      >
                        <img
                          src={project.images[index]}
                          alt={`${project.title} preview ${index + 1}`}
                          loading="lazy"
                          className="project-detail__gallery-image"
                        />
                      </button>
                    ) : (
                      <ProjectPlaceholder
                        title={project.title}
                        caption={`Additional Preview ${index + 1}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SOURCE CODE */}
            {project.githubUrl && (
              <section className="project-detail__section project-detail__repository">
                <h2>Source Code</h2>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary"
                >
                  View GitHub Repository ↗
                </a>
              </section>
            )}
          </div>

          {/* BACK BUTTON */}
          <div className="project-detail__footer">
            <Link
              to="/projects"
              className="button button--secondary"
            >
              Back to All Projects
            </Link>
          </div>
        </PageContainer>
      </section>

      {activeImageIndex !== null && project.images[activeImageIndex] && (
        <ProjectImagePreview
          imageSrc={project.images[activeImageIndex]}
          title={project.title}
          caption={
            activeImageIndex === 0
              ? "Main Project Preview"
              : `Project Gallery ${activeImageIndex}`
          }
          onClose={() => setActiveImageIndex(null)}
        />
      )}
    </>
  );
}