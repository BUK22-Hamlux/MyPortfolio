const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    icon: "bx bxl-github",
    href: "https://github.com/BUK22-Hamlux",
    label: "GitHub",
  },
  { icon: "bx bxl-twitter", href: "https://x.com/Hamluxx", label: "Twitter" },
  {
    icon: "bx bxl-linkedin",
    href: "https://linkedin.com/in/hamlux",
    label: "LinkedIn",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#080f1d] border-t border-slate-800/80 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <i className="bx bx-code-alt text-blue-400 text-sm"></i>
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "Syne,sans-serif" }}
              >
                Hamlux
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Senior Full-Stack Developer crafting accessible, high-performance
              web experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-3 font-semibold">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs text-slate-500 hover:text-blue-400 transition-colors w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-3 font-semibold">
              Connect
            </p>
            <div className="flex gap-2 mb-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-blue-500/50 hover:text-blue-400 transition-all"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
            <a
              href="mailto:hamluxdev@gmail.com"
              className="text-xs text-slate-500 hover:text-blue-400 transition-colors"
            >
              hamluxfx@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600">
            &copy; {year} Hamlux. Built with React &amp; Tailwind CSS.
          </p>
          <a
            href="#home"
            className="text-xs text-slate-600 hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            Back to top <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
