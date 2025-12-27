import React, { useState, useRef, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contactInfo } from "../data/portfolioData";
import * as LucideIcons from "lucide-react";
import { Send, MapPin, Phone, Mail as MailIcon } from "lucide-react";

// Memoized animation variants
const statusVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

// Input classes constant
const inputClasses =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all";

const Contact = () => {
  const form = useRef();
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
    setStatus({ type: "sending", message: "" });

    emailjs
      .sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Thank you! I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus({ type: "", message: "" }), 3000);
        },
        (error) => {
          setStatus({
            type: "error",
            message: error.text
              ? `Submission failed: ${error.text}`
              : "Something went wrong. Please try again.",
          });
          setTimeout(() => setStatus({ type: "", message: "" }), 8000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-linear-to-b from-[#12121a] to-[#0a0a0f] relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects and opportunities.
            </p>

            <div className="space-y-6">
              {[
                {
                  Icon: MailIcon,
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone}`,
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: contactInfo.location,
                  href: null,
                },
              ].map(({ Icon, label, value, href }, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-cyan-500 to-purple-500 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{label}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {contactInfo.social.map((social, index) => {
                  const IconComponent =social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-cyan-500 rounded-lg transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 group"
                    >
                      <IconComponent
                        size={20}
                        className="text-gray-400 group-hover:text-white transition-colors"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  name: "name",
                  type: "text",
                  placeholder: "Abdallah Elshafei",
                  label: "Your Name",
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "abdallah@example.com",
                  label: "Your Email",
                },
                {
                  name: "subject",
                  type: "text",
                  placeholder: "Project Inquiry",
                  label: "Subject",
                },
              ].map(({ name, type, placeholder, label }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-white font-medium mb-2"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className={inputClasses}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.type === "sending"}
                className="w-full px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600  text-white rounded-lg font-medium transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status.type === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>{" "}
                    Sending...
                  </>
                ) : status.type === "success" ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {status.type && (
                <motion.div
                  variants={statusVariants}
                  initial="initial"
                  animate="animate"
                  className={`p-4 border rounded-lg text-center ${
                    status.type === "success"
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
