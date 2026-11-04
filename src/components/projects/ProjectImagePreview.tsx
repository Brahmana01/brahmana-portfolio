import { useEffect, useRef } from "react";

type ProjectImagePreviewProps = {
  imageSrc: string;
  title: string;
  caption?: string;
  onClose: () => void;
};

export default function ProjectImagePreview({
  imageSrc,
  title,
  caption,
  onClose,
}: ProjectImagePreviewProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="project-image-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="project-image-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-image-preview-title"
      >
        <header className="project-image-modal__header">
          <div>
            <p className="project-image-modal__eyebrow">
              IMAGE PREVIEW
            </p>

            <h2
              id="project-image-preview-title"
              className="project-image-modal__title"
            >
              {title}
            </h2>

            {caption && (
              <p className="project-image-modal__caption">
                {caption}
              </p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="project-image-modal__close"
            onClick={onClose}
            aria-label="Close image preview"
          >
            ×
          </button>
        </header>

        <div className="project-image-modal__body">
          <img
            src={imageSrc}
            alt={caption ? `${title} - ${caption}` : title}
          />
        </div>
      </section>
    </div>
  );
}