import PageContainer from "../components/layout/PageContainer";
import CertificateCard from "../components/certificates/CertificateCard";
import Button from "../components/ui/Button";
import usePageMetadata from "../hooks/usePageMetadata";

import { certificates } from "../data/certificates";

export default function CertificatesPage() {
  const publishedCertificates = certificates.filter(
    (certificate) => certificate.published
  );

  usePageMetadata({
    title: "Certificates & Achievements | Brahmana Purba",
    description:
      "Explore certificates, professional learning experiences, and achievements of Brahmana Purba.",
  });

  return (
    <section className="section certificates-page">
      <PageContainer>
        <div className="certificates-page__header">
          <div>
            <p className="hero-eyebrow">
              CREDENTIALS & RECOGNITION
            </p>

            <h1 className="section-title">
              Certificates & Achievements
            </h1>

            <p className="section-description">
              A collection of professional certifications,
              learning experiences, and achievements.
            </p>
          </div>

          <Button to="/" variant="secondary">
            ← Back to Home
          </Button>
        </div>

        {publishedCertificates.length > 0 ? (
          <div className="certificates-list">
            {publishedCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No certificates published yet.</h3>

            <p>
              Certificates and achievements will appear
              here once they are ready to be shared.
            </p>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
