import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      {/* Background effects */}
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      {/* Main hero layout */}
      <div className="hero-main">
        {/* Text content */}
        <div className="hero-content">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" />
            {t.hero.availability}
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t.hero.intro}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.titleFirst}
            <br />
            <span>{t.hero.titleSecond}</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="#projects" className="primary-button">
              {t.hero.viewWork}
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              {t.hero.getInTouch}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a
              href="https://github.com/dhanushkumar-codes"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/dhanush-siddamsetty/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/dhanushsiddamse1"
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank"
            >
              <SiHackerrank size={19} />
            </a>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />

          <div className="profile-placeholder">
            <span>DK</span>
          </div>

          <div className="floating-card card-top">
            <span>3+</span>
            <small>{t.hero.yearsExperience}</small>
          </div>

          <div className="floating-card card-bottom">
            <span>AI</span>
            <small>{t.hero.buildingSystems}</small>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span>{t.hero.scroll}</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}