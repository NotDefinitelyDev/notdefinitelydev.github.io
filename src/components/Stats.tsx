import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { statsData } from "@/constants";

const Stats = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
      id="stats"
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className="border border-neutral-700 rounded-xl py-6 flex justify-center flex-col items-center "
        >
          <p className="text-4xl lining-nums font-bold capitalize">
            {stat.number}
          </p>
          <p className="text-neutral-300">{stat.label}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Stats;
