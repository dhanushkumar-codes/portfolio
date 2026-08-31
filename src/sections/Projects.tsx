import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const projects = [
  {
    number: "01",
    category: "AI / FULL STACK",
    title: "AI Chat Bot",
    description:
      "An AI-powered conversational application built with Laravel, React, TypeScript and Inertia.js. Integrated a locally hosted LLM with LangChain for intelligent responses, conversation management and real-time chat workflows.",
    technologies: [
      "Laravel",
      "React",
      "TypeScript",
      "Inertia.js",
      "Vite",
      "Python",
      "LangChain",
      "Local LLM",
      "REST APIs",
      "MySQL",
    ],
    featured: true,
    github: "https://github.com/dhanushkumar-codes/laravel-ai-chatbot",
  },
  {
    number: "02",
    category: "AI / CONTENT CREATION",
    title: "AI Creator Studio",
    description:
      "An AI-powered content creation platform that automates the complete workflow from script generation to final video production using local LLMs, AI image generation, text-to-speech, speech recognition and video processing.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Local LLM",
      "Flux AI",
      "Piper TTS",
      "Whisper",
      "MoviePy",
      "FFmpeg",
      "SQLite",
    ],
    featured: false,
    github: "https://github.com/dhanushkumar-codes/AI-Creator-Studio",
  },
] as const;

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          className="section-heading projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">{t.projects.label}</span>

            <h2>
              {t.projects.headingFirst}
              <br />
              <span>{t.projects.headingSecond}</span>
            </h2>
          </div>

          <p>{t.projects.description}</p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const projectTranslation = t.projects.items[project.number];

            return (
              <motion.article
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="project-visual">
                  <div className="project-number">{project.number}</div>

                  <div className="project-orbit orbit-one" />
                  <div className="project-orbit orbit-two" />

                  <div className="project-preview">
                    <span>{project.title}</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{projectTranslation.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{projectTranslation.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <span className="github-mark">GH</span>
                      GitHub
                    </a>

                    <a href="#contact" className="project-link">
                      {t.projects.viewDetails}
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/dhanushkumar-codes"
            target="_blank"
            rel="noreferrer"
            className="all-projects-link"
          >
            {t.projects.viewMore}
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}