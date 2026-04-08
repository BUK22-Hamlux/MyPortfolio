import { useState } from "react";
import { motion } from "framer-motion";
import skillsList from "../data/skills";
import SkillCard from "../components/ui/SkillCard";

const categories = ["All", "Frontend", "Backend", "Tools"];

const categorized = {
  Frontend: ["1", "2", "3", "4", "5", "6"],
  Backend: ["7", "9"],
  Tools: ["8"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skillsList
      : skillsList.filter((s) => categorized[activeCategory]?.includes(s.id));

  return (
    <section
      id="skills"
      className="flex items-center bg-[#080f1d] px-4 py-24 min-h-screen"
    >
      <div className="flex flex-col items-center mx-auto gap-3 max-w-6xl w-full">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs bg-slate-800 text-blue-400 font-bold w-fit py-1 px-3 rounded-full border border-slate-700/50"
        >
          MY TECH STACK
        </motion.div>

        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Technical Expertise
        </motion.h1>

        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-slate-500 text-center text-sm max-w-md"
        >
          A curated toolkit of modern technologies I use to architect, design,
          and ship scalable digital products
        </motion.p>

        {/* Category filter */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-2 mt-4 flex-wrap justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 w-full"
        >
          {filtered.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </motion.div>

        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-slate-600 text-xs italic"
        >
          *And many more tools in my arsenal!
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;
