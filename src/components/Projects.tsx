import { motion } from "motion/react";
import { staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { projectsData } from "@/constants";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="scroll-mt-10 mt-30"
      id="projects"
    >
      <SectionHeader subtitle="Projects" title="My Arts" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer(0.5)}
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
