import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const skillGroups = [
  {
    icon: Code2,
    key: "languages",
    skills: ["PHP", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    key: "frameworks",
    skills: ["Laravel", "React", "Django", "FastAPI", "Inertia.js", "Vite"],
  },
  {
    icon: Brain,
    key: "ai",
    skills: ["LLMs", "AI APIs", "AI Chatbots", "Prompt Engineering", "Automation"],
  },
  {
    icon: Database,
    key: "data",
    skills: ["MySQL", "MariaDB", "REST APIs", "API Integration", "JSON"],
  },
  {
    icon: Server,
    key: "infrastructure",
    skills: ["Linux", "Apache", "Nginx", "Docker", "SSH", "Cloud"],
  },
  {
    icon: GitBranch,
    key: "development",
    skills: ["Git", "GitHub", "Postman", "Composer", "npm", "VS Code"],
  },
  {
    icon: Cloud,
    key: "cloud",
    skills: ["HubSpot", "CRM", "Workflows", "Integrations", "Google Cloud"],
  },
  {
    icon: Wrench,
    key: "engineering",
    skills: ["Authentication", "Webhooks", "Payments", "Testing", "Security"],
  },
] as const;

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.skills.label}</span>

          <h2>
            {t.skills.headingFirst}
            <br />
            <span>{t.skills.headingSecond}</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const content = t.skills.groups[group.key];

            return (
              <motion.article
                className="skill-card"
                key={group.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{content.title}</h3>

                <p>{content.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}