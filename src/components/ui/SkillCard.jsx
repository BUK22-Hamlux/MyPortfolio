import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

function SkillCard({ name, description, color, icon }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/20 group cursor-default"
    >
      <div className={`w-10 h-10 rounded-lg ${color} bg-opacity-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
        style={{background: 'rgba(255,255,255,0.04)'}}>
        <i className={`${icon} text-xl ${color.split(' ')[0]}`}></i>
      </div>
      <h3 className="font-bold text-white text-sm" style={{fontFamily:'Syne,sans-serif'}}>{name}</h3>
      <p className="text-xs text-slate-500 mt-0.5 font-medium">{description}</p>
    </motion.div>
  );
}

export default SkillCard;
