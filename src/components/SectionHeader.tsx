import { fadeUp } from "@/lib/animations";
import { SparkleIcon } from "lucide-react";
import { motion } from "motion/react";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <motion.p
        variants={fadeUp}
        className="flex justify-center py-1 gap-2 items-center border border-neutral-600 rounded-sm w-32"
      >
        <SparkleIcon size={15} /> {subtitle}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold pl-1 mt-3 md:max-w-3xl"
      >
        {title}
      </motion.h2>
    </>
  );
};

export default SectionHeader;
