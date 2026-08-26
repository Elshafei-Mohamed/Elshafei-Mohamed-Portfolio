import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/portfolioData";
import { Send, ArrowUpRight } from "lucide-react";

const inputClasses =
  "w-full px-3.5 py-2.5 rounded-[12px] bg-raised border border-line text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-150";

function Contact() {
  const form = useRef();
  const honeypotRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check: if filled, silently reject (bot)
    if (honeypotRef.current?.value) {
      setStatus({
        type: "success",
        message: "Thank you. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    setStatus({ type: "sending", message: "" });

    emailjs
      .sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Thank you. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus({ type: "", message: "" }), 4000);
        },
        (error) => {
          setStatus({
            type: "error",
            message: error.text
              ? `Submission failed: ${error.text}`
              : "Something went wrong. Please try again.",
          });
          setTimeout(() => setStatus({ type: "", message: "" }), 8000);
        },
      );
  };

  const fields = [
    { name: "name", label: "Your name", placeholder: "Your Name" },
    {
      name: "email",
      label: "Your email",
      placeholder: "youremail@example.com",
    },
    { name: "subject", label: "Subject", placeholder: "Project inquiry" },
  ];

  return (
    <section id="contact" className="bg-bg">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Info */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              04 / Contact
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-primary">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-[60ch] text-secondary leading-relaxed">
              Have a project in mind, or want to talk about working together?
              Send a message. I usually reply within a day.
            </p>

            <dl
              role="list"
              className="mt-9 divide-y divide-line border-y border-line"
            >
              <div className="flex items-center justify-between gap-4 py-4 group">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                    Email
                  </dt>
                  <dd className="mt-0.5 text-sm text-secondary break-all">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-primary transition-colors duration-150"
                    >
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                    WhatsApp
                  </dt>
                  <dd className="mt-0.5 text-sm text-secondary">
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-150"
                    >
                      Chat directly
                    </a>
                  </dd>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                    Location
                  </dt>
                  <dd className="mt-0.5 text-sm text-secondary">
                    {contactInfo.location}
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-6 font-mono text-xs text-muted">
              {contactInfo.availability}.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form ref={form} onSubmit={handleSubmit} className="relative">
              <div className="grid sm:grid-cols-2 gap-4">
                {fields.map(({ name, label, placeholder }) => (
                  <div
                    key={name}
                    className={name === "subject" ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={name}
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      {label}
                    </label>
                    <input
                      type={name === "email" ? "email" : "text"}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      autoComplete={
                        name === "name"
                          ? "name"
                          : name === "email"
                            ? "email"
                            : undefined
                      }
                      className={inputClasses}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.type === "sending"}
                className="mt-6 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[12px] bg-primary text-bg text-sm font-medium hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
              >
                {status.type === "sending" ? (
                  <>
                    <span
                      className="w-3.5 h-3.5 border-2 border-bg/40 border-t-bg rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={15} aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Honeypot */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  ref={honeypotRef}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {status.type && status.type !== "sending" && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 p-3.5 rounded-[12px] border text-sm ${
                    status.type === "success"
                      ? "border-line bg-surface text-primary"
                      : "border-accent-deep bg-surface text-accent"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Contact);
