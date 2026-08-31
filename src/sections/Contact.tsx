import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{t.contact.label}</span>

          <h2>
            {t.contact.headingFirst}
            <br />
            <span>{t.contact.headingSecond}</span>
          </h2>

          <p>{t.contact.description}</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="mailto:dhanushsiddamsetty@gmail.com"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Mail size={19} />
              </span>

              <span>
                <small>{t.contact.emailLabel}</small>
                dhanushsiddamsetty@gmail.com
              </span>

              <ArrowUpRight size={16} />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={19} />
              </span>

              <span>
                <small>{t.contact.locationLabel}</small>
                {t.contact.location}
              </span>
            </div>

            <div className="contact-note">
              <span className="contact-note-dot" />

              <p>{t.contact.availability}</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <label>
                {t.contact.form.name}
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                />
              </label>

              <label>
                {t.contact.form.email}
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                />
              </label>
            </div>

            <label>
              {t.contact.form.subject}
              <input
                type="text"
                name="subject"
                placeholder={t.contact.form.subjectPlaceholder}
                required
              />
            </label>

            <label>
              {t.contact.form.message}
              <textarea
                name="message"
                rows={6}
                placeholder={t.contact.form.messagePlaceholder}
                required
              />
            </label>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                t.contact.form.sending
              ) : (
                <>
                  {t.contact.form.send}
                  <Send size={16} />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="form-message success">
                {t.contact.form.success}
              </p>
            )}

            {status === "error" && (
              <p className="form-message error">
                {t.contact.form.error}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}