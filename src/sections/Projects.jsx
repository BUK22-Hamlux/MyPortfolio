import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectList from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

const categories = ["All", "Web", "Mobile", "Open Source"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ProjectList
      : ProjectList.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="projects"
      className="flex items-center px-4 py-24 min-h-screen bg-[#0a1120]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end mb-6">
          <div className="flex-1 max-w-lg">
            <motion.div
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-2 items-center text-blue-500 text-xs font-bold tracking-widest uppercase mb-3"
            >
              <hr className="w-8 border-blue-500" />
              <span>Portfolio</span>
            </motion.div>
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: "Syne,sans-serif" }}
            >
              Curated Work
            </motion.h2>
            <motion.p
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-500 text-sm mt-1"
            >
              Full-stack development, cloud architecture, and open-source
              contributions.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-2 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <hr className="w-full border-slate-800 mb-8" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="project-card"
          >
            {displayed.length > 0 ? (
              displayed.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))
            ) : (
              <p className="text-slate-500 text-sm col-span-full text-center py-12">
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {filtered.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-blue-400 text-sm font-semibold border border-slate-700 hover:border-blue-500/50 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-blue-500/5"
            >
              {showAll ? "Show Less" : `View All Projects (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
