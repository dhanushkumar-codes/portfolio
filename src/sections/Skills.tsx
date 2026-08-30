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

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    description: "Core programming technologies I work with.",
    skills: ["PHP", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    description: "Frameworks and libraries for building applications.",
    skills: ["Laravel", "React", "Django", "FastAPI", "Inertia.js", "Vite"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Building intelligent and automated solutions.",
    skills: ["LLMs", "AI APIs", "AI Chatbots", "Prompt Engineering", "Automation"],
  },
  {
    icon: Database,
    title: "Data",
    description: "Working with application data and APIs.",
    skills: ["MySQL", "MariaDB", "REST APIs", "API Integration", "JSON"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Development and server-side environments.",
    skills: ["Linux", "Apache", "Nginx", "Docker", "SSH", "Cloud"],
  },
  {
    icon: GitBranch,
    title: "Development",
    description: "Tools and practices I use every day.",
    skills: ["Git", "GitHub", "Postman", "Composer", "npm", "VS Code"],
  },
  {
    icon: Cloud,
    title: "Cloud & CRM",
    description: "Cloud services and business platforms.",
    skills: ["HubSpot", "CRM", "Workflows", "Integrations", "Google Cloud"],
  },
  {
    icon: Wrench,
    title: "Engineering",
    description: "Building maintainable production software.",
    skills: ["Authentication", "Webhooks", "Payments", "Testing", "Security"],
  },
];

export default function Skills() {
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
          <span className="section-label">02 — SKILLS</span>

          <h2>
            Tools I use to
            <br />
            <span>build things.</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="skill-card"
                key={group.title}
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

                <h3>{group.title}</h3>

                <p>{group.description}</p>

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