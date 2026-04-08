import React, { useState, useEffect } from "react";
import Button from "../common/button.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "../../hooks/useScrollSpy.js";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a1120]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/50" : "bg-transparent"} flex items-center justify-between px-4 md:px-8 py-3 text-white`}
    >
      <a href="#home" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-200">
          <i className="bx bx-code-alt text-blue-400 text-sm"></i>
        </div>
        <h1
          className="font-bold text-lg"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Hamlux
        </h1>
      </a>

      <div className="hidden sm:flex gap-6 items-center lg:gap-8 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`transition-colors duration-200 hover:text-blue-400 relative group ${activeSection === link.href.slice(1) ? "text-blue-400" : "text-slate-300"}`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-200 ${activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </a>
        ))}
        <Button
          href="#contact"
          variant="primary"
          optionalClasses="px-4 py-2 text-sm"
          children="Hire Me"
        />
      </div>

      <button
        className="sm:hidden p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-2xl`}></i>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0a1120]/98 backdrop-blur-md border-b border-slate-800 flex flex-col p-6 gap-5 sm:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base transition-colors hover:text-blue-400 ${activeSection === link.href.slice(1) ? "text-blue-400" : "text-slate-300"}`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              variant="primary"
              optionalClasses="px-4 py-2 text-sm w-fit"
              children="Hire Me"
              onClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
