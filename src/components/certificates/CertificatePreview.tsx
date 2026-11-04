import { useEffect, useRef } from "react";
import type { Certificate } from "../../types/portfolio";

type CertificatePreviewProps = {
  certificate: Certificate;
  onClose: () => void;
};

export default function CertificatePreview({
  certificate,
  onClose,
}: CertificatePreviewProps) {
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
      className="certificate-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="certificate-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`certificate-preview-title-${certificate.id}`}
      >
        <header className="certificate-modal__header">
          <div>
            <p className="certificate-modal__eyebrow">
              CERTIFICATE PREVIEW
            </p>

            <h2
              id={`certificate-preview-title-${certificate.id}`}
              className="certificate-modal__title"
            >
              {certificate.title}
            </h2>

            <p className="certificate-modal__issuer">
              {certificate.issuer}
              {certificate.year !== null &&
                ` · ${certificate.year}`}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="certificate-modal__close"
            onClick={onClose}
            aria-label="Close certificate preview"
          >
            ×
          </button>
        </header>

        <div className="certificate-modal__image">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={`Full preview of ${certificate.title}`}
            />
          ) : (
            <p>Certificate image is not available.</p>
          )}
        </div>

        <footer className="certificate-modal__footer">
          <span className="certificate-modal__category">
            {certificate.category}
          </span>

          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              View Original PDF ↗
            </a>
          )}
        </footer>
      </section>
    </div>
  );
}
