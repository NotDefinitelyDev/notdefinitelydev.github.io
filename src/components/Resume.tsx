import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { education, experience, tools } from "@/constants";
import ExpCard from "@/components/ui/ExpCard";
import ToolCard from "@/components/ui/ToolCard";

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="scroll-mt-10 mt-30"
      id="resume"
    >
      <SectionHeader subtitle="Resume" title="Education & Experience" />
      <motion.p variants={fadeUp} className="text-neutral-300 mt-4">
        My education and experience reflect a deliberate transition toward a
        long-term career in software and web development. While studying
        Agricultural Engineering, I developed strong analytical and
        problem-solving foundations, which I later redirected into technology
        through intensive full-stack training and real project work. Through
        NTI’s MEAN track, freelance frontend projects, and business development
        exposure with ITIDA, I combined technical growth with communication,
        adaptability, and business awareness. This journey demonstrates my
        ability to learn quickly, collaborate effectively, and take ownership of
        my development — positioning me as a growth-driven junior developer who
        brings both technical potential and strong professional maturity to
        every team.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-10 my-10">
        <motion.div variants={fadeUp} className="mb-16 md:mb-0">
          <h2 className="font-semibold text-3xl">Education</h2>
          <div className="border-l border-neutral-700 mt-10 ml-4 pl-6">
            <h1>test</h1>
            {education.map((item, i) => {
              return <ExpCard key={i} {...item} />;
            })}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mb-16 md:mb-0">
          <h2 className="font-semibold text-3xl">Work Experience</h2>
          <div className="border-l border-border mt-10 ml-4 pl-6 space-y-8">
            {experience.map((item, i) => {
              return <ExpCard key={i} {...item} />;
            })}
          </div>
        </motion.div>
      </div>
      <div className="my-16">
        <motion.h2
          variants={fadeUp}
          className="text-lg sm:text-3xl font-semibold mb-8 capitalize"
        >
          My Stack
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5"
        >
          {tools.map((item, i) => {
            return <ToolCard key={i} {...item} />;
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
