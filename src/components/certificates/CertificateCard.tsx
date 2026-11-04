import { useState } from "react";
import type { Certificate } from "../../types/portfolio";
import CertificatePreview from "./CertificatePreview";

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({
  certificate,
}: CertificateCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <article className="certificate-row">
        <button
          type="button"
          className="certificate-row__thumbnail"
          onClick={() => setIsPreviewOpen(true)}
          aria-label={`Preview ${certificate.title}`}
        >
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={`Preview of ${certificate.title}`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span>Certificate Preview</span>
          )}
        </button>

        <div className="certificate-row__content">
          <div className="certificate-row__meta">
            <span className="certificate-row__category">
              {certificate.category}
            </span>

            {certificate.year !== null && (
              <span className="certificate-row__year">
                {certificate.year}
              </span>
            )}
          </div>

          <h3 className="certificate-row__title">
            {certificate.title}
          </h3>

          <p className="certificate-row__issuer">
            {certificate.issuer}
          </p>

          <div className="certificate-row__actions">
            <button
              type="button"
              className="certificate-row__action"
              onClick={() => setIsPreviewOpen(true)}
            >
              Preview ↗
            </button>

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-row__action"
              >
                Open PDF ↗
              </a>
            )}
          </div>
        </div>
      </article>

      {isPreviewOpen && (
        <CertificatePreview
          certificate={certificate}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </>
  );
}
