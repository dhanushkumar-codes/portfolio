import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

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
          <span className="section-label">06 — CONTACT</span>

          <h2>
            Let's build
            <br />
            <span>something useful.</span>
          </h2>

          <p>
            Have a project, opportunity or idea you'd like to discuss? Send me a
            message and I'll get back to you.
          </p>
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
                <small>Email</small>
                dhanushsiddamsetty@gmail.com
              </span>

              <ArrowUpRight size={16} />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={19} />
              </span>

              <span>
                <small>Location</small>
                India · Open to remote opportunities
              </span>
            </div>

            <div className="contact-note">
              <span className="contact-note-dot" />

              <p>
                Currently open to Full Stack, Software Development and
                AI-focused opportunities.
              </p>
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
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me a little about your project or opportunity..."
                required
              />
            </label>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send size={16} />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="form-message success">
                Thanks! Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p className="form-message error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
