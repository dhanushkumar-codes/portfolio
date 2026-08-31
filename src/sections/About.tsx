import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Brain, Server } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights.fullStack.title,
      description: t.about.highlights.fullStack.description,
    },
    {
      icon: Brain,
      title: t.about.highlights.ai.title,
      description: t.about.highlights.ai.description,
    },
    {
      icon: Server,
      title: t.about.highlights.apis.title,
      description: t.about.highlights.apis.description,
    },
  ];

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
          <span className="section-label">{t.about.label}</span>

          <h2>
            {t.about.titleFirst}
            <br />
            <span>{t.about.titleSecond}</span>
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
            <p className="about-lead">{t.about.lead}</p>

            <p>{t.about.paragraphOne}</p>

            <p>{t.about.paragraphTwo}</p>

            <a href="#experience" className="text-link">
              {t.about.exploreExperience}
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
            <span>{t.about.stats.years}</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>{t.about.stats.ai}</span>
          </div>

          <div>
            <strong>Full Stack</strong>
            <span>{t.about.stats.fullStack}</span>
          </div>

          <div>
            <strong>APIs</strong>
            <span>{t.about.stats.apis}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}