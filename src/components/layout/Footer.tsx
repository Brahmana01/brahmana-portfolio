export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Brahmana Purba.
          All rights reserved.
        </p>

        <p>Built with React & TypeScript.</p>
      </div>
    </footer>
  );
}
