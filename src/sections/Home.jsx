import Button from "../components/common/button.jsx";
import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect.js";

const roles = ["frontend Developer", "React Specialist", "UI/UX Enthusiast"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Home() {
  const typedText = useTypingEffect(roles, 90, 55, 2200);

  return (
    <section id="home">
      <div className="relative min-h-screen bg-[#080f1d] overflow-hidden flex flex-col items-center justify-center px-4 text-center">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <motion.div
          className="z-10 max-w-4xl mx-auto py-16"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-2 w-fit mx-auto py-1.5 px-4 mb-8 rounded-full bg-slate-800/80 border border-slate-700/50"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-slate-300 text-xs sm:text-sm">
              Available for new opportunities
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "Syne,sans-serif" }}
          >
            Building digital
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 leading-tight mb-6"
            style={{ fontFamily: "Syne,sans-serif" }}
          >
            experiences that matter
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-slate-400 text-base sm:text-lg">I'm a </span>
            <span
              className="text-blue-400 font-semibold text-base sm:text-lg min-w-55 text-left"
              style={{ fontFamily: "Syne,sans-serif" }}
            >
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I craft robust, accessible and high-performance web applications
            with a designer's eye and an engineer's precision.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              id="contact-btn"
              children="Get In Touch"
              href="#contact"
              variant="primary"
              optionalClasses="px-6 py-3 text-base"
            />
            <Button
              id="download-cv-btn"
              children={
                <>
                  <i className="bx bx-download mr-2"></i>Download CV
                </>
              }
              href="/Yahaya_Lukman_CV.pdf"
              download
              variant="not-primary"
              optionalClasses="px-6 py-3 text-base text-white border-slate-600"
            />
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="flex gap-8 sm:gap-12 justify-center mt-16 flex-wrap"
          >
            {[
              { value: "1+", label: "Years Experience" },
              { value: "10+", label: "Projects Built" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "Syne,sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <i className="bx bx-chevron-down text-slate-600 text-xl"></i>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
