import { motion } from "framer-motion";

interface SkillCardProps {
  skill_name: string;
  Image: string;
  des: string;
}

const SkillCard = ({ skill_name, Image, des }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="py-2 px-3 sm:px-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all"
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-6 h-6 sm:w-8 sm:h-8 relative flex-shrink-0">
          <img
            src={Image}
            alt={skill_name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-200 truncate">{skill_name}</h4>
          {des && <p className="text-[10px] sm:text-xs text-gray-400 truncate">{des}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;