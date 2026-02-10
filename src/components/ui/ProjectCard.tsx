import { fadeUp } from "@/lib/animations";
import { type ProjectType } from "@/types/type";
import { motion } from "motion/react";

const ProjectCard = ({ imgSrc, title, tags }: ProjectType) => {
  return (
    <motion.div variants={fadeUp} className="relative">
      <figure className="overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-md transition duration-300 hover:scale-105 w-full"
        />
      </figure>
      <div className="absolute bottom-0 p-2 flex gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm rounded-sm hover:text-black hover:bg-primary duration-150 text-gray-500 px-2 py-1 bg-background  cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
