import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "Aug 2023 — July 2026",
    role: "Full Stack Developer",
    company: "The Dragon Year (72 Dragons)",
    location: "India / Remote",
    description:
      "Built and maintained production web applications, CMS platforms, backend services, REST APIs and integrations using PHP, Laravel, Python, Django, Node.js and React. Worked on automation, performance optimization, database systems and third-party API integrations.",
    technologies: [
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "React",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Git",
      "Linux",
      "REST APIs",
      "OpenAI",
      "LangChain",
    ],
  },
  {
    period: "July 2022 — Nov 2022",
    role: "Developer — Virtual Experience",
    company: "Accenture Nordics",
    location: "Virtual",
    description:
      "Completed a developer virtual experience involving software development tasks, architecture changes, cloud infrastructure scaling, code analysis, debugging, testing and security-related activities.",
    technologies: [
      "Software Development",
      "Cloud",
      "Architecture",
      "Debugging",
      "Testing",
      "Security",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 — EXPERIENCE</span>

          <h2>
            Where I've
            <br />
            <span>worked.</span>
          </h2>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.period}-${experience.role}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="experience-period">
                <span>{experience.period}</span>
              </div>

              <div className="experience-marker">
                <span />
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <span className="experience-role">{experience.role}</span>

                    <h3>{experience.company}</h3>
                  </div>

                  <div className="experience-location">
                    <BriefcaseBusiness size={15} />
                    {experience.location}
                  </div>
                </div>

                <p>{experience.description}</p>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="experience-link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Interested in working together?
          <ArrowUpRight size={17} />
        </motion.a>
      </div>
    </section>
  );
}
