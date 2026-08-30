import { motion } from "framer-motion";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Service Hub Software Certification",
    issuer: "HubSpot",
    date: "Jul 2026",
    url: "https://app-na2.hubspot.com/academy/achievements/8k5dz5pw/en/1/dhanush-siddamsetty/service-hub-software",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2023",
    url: "https://www.hackerrank.com/certificates/c592de307082",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2023",
    url: "https://www.hackerrank.com/certificates/a6a59553b575",
  },
  {
    title: "Solutions Architecture Virtual Experience Program",
    issuer: "Amazon",
    date: "Nov 2022",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_gTGx4heMpfs5WADYy_1667649699366_completion_certificate.pdf",
  },
  {
    title: "Technology Virtual Experience Program",
    issuer: "Deloitte",
    date: "Nov 2022",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_gTGx4heMpfs5WADYy_1668533371449_completion_certificate.pdf",
  },
  {
    title: "Developer Virtual Experience Program",
    issuer: "Accenture Nordics",
    date: "Jul 2022",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_gTGx4heMpfs5WADYy_1667644080737_completion_certificate.pdf",
  },
];
export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 — EDUCATION & CERTIFICATIONS</span>

          <h2>
            Always learning.
            <br />
            <span>Always building.</span>
          </h2>
        </motion.div>

        <div className="education-layout">
          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>

            <span className="education-label">MASTER'S DEGREE</span>

            <h3>
              Artificial Intelligence
              <br />& Machine Learning
            </h3>

            <p>
              Advanced study focused on artificial intelligence, machine
              learning and modern software technologies.
            </p>

            <div className="education-meta">
              <span>Lovely Professional University</span>
            </div>
          </motion.div>

          <div className="certifications">
            <div className="certifications-header">
              <div>
                <span className="education-label">CERTIFICATIONS</span>
                <h3>Professional learning</h3>
              </div>

              <Award size={22} />
            </div>

            <div className="certification-list">
              {certifications.map((certification, index) => (
                <motion.div
                  className="certification-item"
                  key={certification.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                >
                  <div className="certification-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="certification-info">
                    <strong>{certification.title}</strong>
                    <span>{certification.issuer}</span>
                  </div>

                  <span className="certification-date">
                    {certification.date}
                  </span>

                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                    aria-label={`View ${certification.title} certificate`}
                  >
                    <ExternalLink size={15} className="certification-arrow" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
