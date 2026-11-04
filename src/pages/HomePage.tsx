import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import CertificatesSection from "../sections/CertificatesSection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import ContactSection from "../sections/ContactSection";
import usePageMetadata from "../hooks/usePageMetadata";

export default function HomePage() {
    usePageMetadata({
        title: "Brahmana Purba | IT Student & Developer",
        description:
            "Explore Brahmana Purba's portfolio, technical skills, projects, research experience, and background in Information Technology.",
    });
  return (
    <>
      <HeroSection />

      <ProjectsSection />

      <SkillsSection />

      <CertificatesSection />

      <ExperienceSection />

      <EducationSection />

      <ContactSection />
    </>
  );
}
