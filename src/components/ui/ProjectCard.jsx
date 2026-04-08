import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function ProjectCard({
  img,
  name,
  description,
  skillsUsed,
  linkUrl,
  codeUrl,
  category,
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/20 group flex flex-col"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {category && (
          <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-slate-900/80 text-blue-400 border border-blue-500/30 backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-white text-base mb-1"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          {name}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-3 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {skillsUsed.map((skill) => (
            <span
              key={skill.id}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>

        <hr className="border-slate-700/50 mb-4" />

        <div className="flex gap-2">
          {linkUrl && linkUrl !== "#" ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <i className="bx bx-link-external"></i> View Project
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-500 bg-slate-700/40 rounded-lg cursor-not-allowed">
              <i className="bx bx-lock-alt"></i> Private
            </span>
          )}
          {codeUrl && codeUrl !== "#" && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 rounded-lg transition-all"
            >
              <i className="bx bxl-github text-sm"></i> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
