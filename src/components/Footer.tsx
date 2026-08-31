import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <a href="/" className="footer-logo">
            DK<span>.</span>
          </a>

          <p>{t.footer.description}</p>
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

          <a
            href="https://www.hackerrank.com/profile/dhanushsiddamse1"
            target="_blank"
            rel="noreferrer"
          >
            HackerRank
            <ArrowUpRight size={14} />
          </a>

          <a href="#contact">
            {t.footer.contact}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Dhanush Kumar
        </span>

        <span>{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}