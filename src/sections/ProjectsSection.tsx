import { Link } from "react-router-dom";

import { projects } from "../data/projects";

import ProjectCard from "../components/projects/ProjectCard";
import PageContainer from "../components/layout/PageContainer";

export default function ProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.published && project.featured)
    .slice(0, 3);

  return (
    <section className="section projects-section" id="projects">
      <PageContainer>
        <div className="section-heading">
          <div>
            <p className="hero-eyebrow">SELECTED WORK</p>

            <h2 className="section-title">
              Featured Projects
            </h2>

            <p className="section-description">
              A selection of projects across mobile, web, and educational technology.
            </p>
          </div>

          <Link
            to="/projects"
            className="button button--secondary"
          >
            View All Projects
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
