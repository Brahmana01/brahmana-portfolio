import { Link } from "react-router-dom";

import { certificates } from "../data/certificates";

import CertificateCard from "../components/certificates/CertificateCard";
import PageContainer from "../components/layout/PageContainer";

export default function CertificatesSection() {
  const featuredCertificates = certificates
    .filter(
      (certificate) =>
        certificate.published && certificate.featured
    )
    .slice(0, 3);

  return (
    <section
      className="section certificates-section"
      id="certificates"
    >
      <PageContainer>
        <div className="section-heading">
          <div>
            <p className="hero-eyebrow">
              CREDENTIALS & RECOGNITION
            </p>

            <h2 className="section-title">
              Certificates & Achievements
            </h2>

            <p className="section-description">
              Professional certifications, learning experiences,
              and achievements throughout my journey.
            </p>
          </div>

          <Link
            to="/certificates"
            className="button button--secondary"
          >
            View All Certificates ↗
          </Link>
        </div>

        {featuredCertificates.length > 0 ? (
          <div className="certificates-list">
            {featuredCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Certificates are being prepared.</h3>

            <p>
              I'm currently organizing my certificates
              and achievements. Check back soon.
            </p>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
