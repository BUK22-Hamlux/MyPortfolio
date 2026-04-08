import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/images/hamlux-image.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const experiences = [
  {
    year: "2026–Now",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    desc: "Building custom web apps for clients across various industries.",
  },
  {
    year: "2025-2026",
    role: "Frontend Developer",
    company: "Self-Employed",
    desc: "Building responsive and accessible user interfaces.",
  },
  {
    year: "2025",
    role: "Junior Web Developer",
    company: "Personal Projects",
    desc: "Built student portal and responsive landing pages.",
  },
];

function About() {
  return (
    <section id="about" className="min-h-screen px-4 py-24 bg-[#0a1120]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-2 items-center text-blue-500 text-xs font-bold tracking-widest uppercase mb-4"
        >
          <hr className="w-8 border-blue-500" />
          <span>About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: image + timeline */}
          <div>
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <img
                src={myImage}
                alt="Hamlux"
                className="rounded-2xl w-full object-cover shadow-2xl shadow-blue-500/10"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3
                className="text-white font-bold text-lg mb-4"
                style={{ fontFamily: "Syne,sans-serif" }}
              >
                Experience
              </h3>
              <div className="flex flex-col gap-4">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i + 3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></div>
                      {i < experiences.length - 1 && (
                        <div className="w-0.5 bg-slate-700 flex-1 mt-1"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="text-xs text-blue-400 font-mono">
                        {exp.year}
                      </span>
                      <div
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "Syne,sans-serif" }}
                      >
                        {exp.role}
                      </div>
                      <div className="text-blue-400/70 text-xs mb-1">
                        {exp.company}
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: bio + values */}
          <div className="flex flex-col gap-6">
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "Syne,sans-serif" }}
            >
              I build pixel-perfect, engaging, and
              <span className="text-blue-500"> accessible</span> digital
              experiences
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4 text-slate-400 text-sm leading-relaxed"
            >
              <p>
                Hi, I'm <span className="text-white font-medium">Hamlux</span>.
                I started my journey as a designer who learned to code, which
                gives me a unique perspective on the entire product lifecycle. I
                don't just write code — I solve problems and create interfaces
                that users love to interact with.
              </p>
              <p>
                I specialize in building scalable frontend architectures using
                the React ecosystem. My passion lies at the intersection of
                design and engineering, ensuring every pixel serves a purpose
                and every interaction feels smooth.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source,
                writing technical articles, or exploring the latest UI
                frameworks.
              </p>
            </motion.div>

            {/* Values grid */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 mt-2"
            >
              {[
                {
                  icon: "bx bx-palette",
                  label: "Design-First",
                  desc: "Every UI decision has purpose",
                },
                {
                  icon: "bx bx-bolt-circle",
                  label: "Performance",
                  desc: "Fast, optimized, scalable code",
                },
                {
                  icon: "bx bx-shield",
                  label: "Accessibility",
                  desc: "Inclusive experiences for all",
                },
                {
                  icon: "bx bx-code-block",
                  label: "Clean Code",
                  desc: "Readable, maintainable, tested",
                },
              ].map((v) => (
                <div
                  key={v.label}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                >
                  <i className={`${v.icon} text-blue-400 text-xl mb-2`}></i>
                  <div
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "Syne,sans-serif" }}
                  >
                    {v.label}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{v.desc}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 mt-2 flex-wrap"
            >
              <a
                href="#contact"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors"
                style={{ fontFamily: "Syne,sans-serif" }}
              >
                Work With Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-5 py-2.5 border border-slate-600 hover:border-slate-500 text-slate-300 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <i className="bx bx-download"></i> Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
