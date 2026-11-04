import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../data/projects";
import usePageMetadata from "../hooks/usePageMetadata";

export default function ProjectsPage() {
  usePageMetadata({
    title: "Projects | Brahmana Purba",
    description:
      "Explore projects in mobile applications, web development, AI, and educational technology.",
  });

  const publishedProjects = projects.filter(
    (project) => project.published
  );

  return (
    <section className="section projects-page">
      <PageContainer>
        <div className="projects-page__header">
          <div>
            <p className="hero-eyebrow">MY WORK</p>

            <h1 className="section-title">
              All Projects
            </h1>

            <p className="section-description">
              Explore projects, applications, and development experiences.
            </p>
          </div>

          <Link
            to="/"
            className="button button--secondary"
          >
            Back to Home
          </Link>
        </div>

        <div className="projects-grid">
          {publishedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {publishedProjects.length === 0 && (
          <div className="empty-state">
            <h3>Projects are being prepared.</h3>
            <p>Please check back later.</p>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
