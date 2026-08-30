import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Brain, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Modern web applications from frontend to backend.",
  },
  {
    icon: Brain,
    title: "AI & LLM",
    description: "AI-powered features, chatbots and intelligent workflows.",
  },
  {
    icon: Server,
    title: "APIs & Systems",
    description: "REST APIs, integrations, automation and server-side systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 — ABOUT ME</span>

          <h2>
            Building software
            <br />
            <span>with purpose.</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-lead">
              I'm a Full Stack Developer with a strong interest in AI,
              automation and building products that solve real problems.
            </p>

            <p>
              I work across the stack, from designing responsive interfaces
              with React to building backend systems, REST APIs and
              integrations using PHP, Laravel, Python and Django.
            </p>

            <p>
              I'm particularly interested in combining traditional software
              engineering with AI and LLM technologies to create smarter,
              more useful applications.
            </p>

            <a href="#experience" className="text-link">
              Explore my experience
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="highlight-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="highlight-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <strong>3+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>AI & LLM Solutions</span>
          </div>

          <div>
            <strong>Full Stack</strong>
            <span>Frontend to Backend</span>
          </div>

          <div>
            <strong>APIs</strong>
            <span>Integrations & Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}