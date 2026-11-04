import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <section className="section">
      <PageContainer>
        <div className="collection-page">
          <h1>404 — Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Button to="/">Back to Home</Button>
        </div>
      </PageContainer>
    </section>
  );
}
