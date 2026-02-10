import { fadeUp } from "@/lib/animations";
import { type ToolsType } from "@/types/type";
import { motion } from "framer-motion";

const ToolCard = ({ imgSrc, label }: ToolsType) => {
  return (
    <motion.div
      variants={fadeUp}
      className="border-neutral-700 border rounded-md flex justify-center items-center flex-col py-4"
    >
      <img src={imgSrc} alt={label} />
      <p className="font-bold mt-2">{label}</p>
    </motion.div>
  );
};

export default ToolCard;
