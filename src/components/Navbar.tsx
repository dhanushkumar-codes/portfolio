import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

const links = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
] as const;

const languages: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "EN" },
  { code: "de", label: "Deutsch", nativeLabel: "DE" },
  { code: "ja", label: "日本語", nativeLabel: "日本語" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t } = useLanguage();

  function closeMenu() {
    setMenuOpen(false);
  }

  function changeLanguage(newLanguage: Language) {
    setLanguage(newLanguage);
    setLanguageOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLanguage =
    languages.find((item) => item.code === language) ?? languages[0];

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="logo" onClick={closeMenu}>
        DK<span>.</span>
      </a>

      {/* Desktop navigation */}
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {t.nav[link.key]}
          </a>
        ))}
      </div>

      {/* Desktop right side */}
      <div className="nav-right">
        {/* Language dropdown */}
        <div className="language-dropdown" ref={languageRef}>
          <button
            type="button"
            className={`language-trigger ${
              languageOpen ? "open" : ""
            }`}
            onClick={() => setLanguageOpen((open) => !open)}
            aria-label="Select language"
            aria-expanded={languageOpen}
          >
            <span>{currentLanguage.nativeLabel}</span>
            <ChevronDown
              size={15}
              className={languageOpen ? "rotate" : ""}
            />
          </button>

          {languageOpen && (
            <div className="language-menu">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={`language-option ${
                    language === item.code ? "active" : ""
                  }`}
                  onClick={() => changeLanguage(item.code)}
                >
                  <span>
                    {item.label}
                    <small>{item.nativeLabel}</small>
                  </span>

                  {language === item.code && <Check size={15} />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contact */}
        <a href="#contact" className="nav-contact desktop-contact">
          {t.nav.letsTalk}
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {t.nav[link.key]}
          </a>
        ))}

        {/* Mobile languages */}
        <div className="mobile-language-switcher">
          <span className="mobile-language-label">Language</span>

          <div className="mobile-language-options">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={language === item.code ? "active" : ""}
                onClick={() => changeLanguage(item.code)}
              >
                {item.nativeLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile contact */}
        <a
          href="#contact"
          className="mobile-contact"
          onClick={closeMenu}
        >
          {t.nav.letsTalk}
        </a>
      </div>
    </nav>
  );
}