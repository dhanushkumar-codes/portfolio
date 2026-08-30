import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <a href="/" className="footer-logo">
            DK<span>.</span>
          </a>

          <p>
            Full Stack & AI Developer building web applications,
            intelligent systems and useful digital products.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/dhanushkumar-codes"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/dhanush-siddamsetty/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={14} />
          </a>

          <a href="#contact">
            Contact
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Dhanush Kumar</span>

        <span>Built with React & TypeScript</span>
      </div>
    </footer>
  );
}