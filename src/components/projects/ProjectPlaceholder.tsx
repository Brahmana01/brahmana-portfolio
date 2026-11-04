type ProjectPlaceholderProps = {
  title: string;
  caption?: string;
};

export default function ProjectPlaceholder({
  title,
  caption = "Project Preview",
}: ProjectPlaceholderProps) {
  const initials =
    title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase() || "BP";

  return (
    <div className="project-placeholder">
      <span className="project-placeholder__mark">
        {initials}
      </span>

      <span className="project-placeholder__label">
        {caption}
      </span>
    </div>
  );
}
