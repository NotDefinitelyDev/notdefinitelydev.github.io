import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SparkleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.2)}
      className="pt-20"
      id="hero"
    >
      <motion.p
        variants={fadeUp}
        className="flex justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32 items-center text-sm text-neutral-300"
      >
        <SparkleIcon size={15} /> <span>Who Am I</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 max-w-3xl md:leading-16 capitalize  bg-clip-text bg-linear-to-r from-primary to-secondary"
      >
        Hi, I'm Nour El-Deen Full-Stack Web Developer (MERN & Angular)
      </motion.h1>

      <motion.div variants={fadeUp} className="mt-6 flex gap-4">
        <Button asChild>
          <a href="#projects">My Projects</a>
        </Button>
        <Button variant="outline" className="cursor-pointer" asChild>
          <a href="/Nour_ElDeen_CV.pdf" download>
            Download CV
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
