import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

export default function Hero() {
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
            Available for opportunities
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I'm Dhanush Kumar.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack
            <br />
            <span>& AI Developer.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            I build scalable web applications, AI-powered solutions, REST APIs
            and automation systems that solve real-world problems.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="#projects" className="primary-button">
              View my work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Get in touch
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
            <small>Years Experience</small>
          </div>

          <div className="floating-card card-bottom">
            <span>AI</span>
            <small>Building intelligent systems</small>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}