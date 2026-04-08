import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "../context/ToastContext.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const EMAILJS_SERVICE_ID = "service_ti4h21k";
const EMAILJS_TEMPLATE_ID = "template_7w3rjrf";
const EMAILJS_PUBLIC_KEY = "g9d3KmoY2p_ghbW8l";

const contactInfo = [
  {
    icon: "bx bx-envelope",
    label: "Email",
    value: "hamluxfx@gmail.com",
    href: "mailto:hamluxfx@gmail.com",
  },
  { icon: "bx bx-map", label: "Location", value: "Kano, Nigeria", href: null },
  {
    icon: "bx bx-time",
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const socials = [
  {
    icon: "bx bxl-github",
    label: "GitHub",
    href: "https://github.com/BUK22-Hamlux",
  },
  {
    icon: "bx bxl-twitter",
    label: "Twitter",
    href: "https://x.com/Hamluxx",
  },
  {
    icon: "bx bxl-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/hamlux",
  },
];

function Contact() {
  const { addToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      addToast(
        "Message sent successfully! I'll get back to you soon.",
        "success",
      );
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS status:", err.status);
      console.error("EmailJS text:", err.text);
      console.error("Full error:", JSON.stringify(err));
      addToast(
        "Failed to send message. Please email me directly at hamluxfx@gmail.com",
        "error",
      );
    } finally {
      setSending(false);
    }
  };
  const inputClass = (field) =>
    `bg-slate-800/60 text-white text-sm p-3 rounded-lg mt-1 w-full border transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
      errors[field]
        ? "border-red-500/60"
        : "border-slate-700/50 hover:border-slate-600"
    }`;

  return (
    <section
      id="contact"
      className="px-4 py-24 min-h-screen bg-[#080f1d] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-2 items-center text-blue-500 text-xs font-bold tracking-widest uppercase mb-4"
        >
          <hr className="w-8 border-blue-500" />
          <span>Contact</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "Syne,sans-serif" }}
            >
              Let's build something
              <br />
              <span className="text-blue-400">together</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-400 text-sm leading-relaxed"
            >
              I'm currently open to new opportunities. Whether you have a
              project proposal, a question, or just want to say hi — I'll get
              back to you!
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <i className={`${item.icon} text-blue-400`}></i>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-200 text-sm hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 group"
                    aria-label={s.label}
                  >
                    <i
                      className={`${s.icon} text-slate-400 group-hover:text-blue-400 transition-colors text-lg`}
                    ></i>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
            >
              <h3
                className="text-white font-bold text-lg"
                style={{ fontFamily: "Syne,sans-serif" }}
              >
                Send a Message
              </h3>
              <p className="text-slate-500 text-xs -mt-2">
                Fill out the form below and I'll get back to you shortly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col text-xs text-slate-400 font-medium">
                  Name <span className="text-red-400">*</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.name}
                    </span>
                  )}
                </label>
                <label className="flex flex-col text-xs text-slate-400 font-medium">
                  Email <span className="text-red-400">*</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.email}
                    </span>
                  )}
                </label>
              </div>

              <label className="flex flex-col text-xs text-slate-400 font-medium">
                Subject <span className="text-slate-600">(optional)</span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project proposal, collaboration, etc."
                  className={inputClass("subject")}
                />
              </label>

              <label className="flex flex-col text-xs text-slate-400 font-medium">
                Message <span className="text-red-400">*</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.message}
                  </span>
                )}
                <span className="text-slate-600 text-xs mt-1 self-end">
                  {form.message.length} chars
                </span>
              </label>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  sending
                    ? "bg-blue-600/60 cursor-not-allowed text-white/70"
                    : "bg-blue-600 hover:bg-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
                }`}
                style={{ fontFamily: "Syne,sans-serif" }}
              >
                {sending ? (
                  <>
                    <i className="bx bx-loader-alt animate-spin text-lg"></i>{" "}
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bx bx-send text-lg"></i> Send Message
                  </>
                )}
              </button>

              <p className="text-slate-600 text-xs text-center">
                <i className="bx bx-lock-alt mr-1"></i>
                Your information is safe and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
