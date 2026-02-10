import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="scroll-mt-10 mt-30"
      id="about"
    >
      <SectionHeader
        subtitle="About Me"
        title="Obsessed with Pixel-Perfect UIs and Clean Backend Architecture."
      />
      <motion.p variants={fadeUp} className="text-neutral-300 mt-4">
        I didn’t start my journey in technology through a traditional path — I
        started it through curiosity. From getting my first computer at a very
        young age, to spending countless hours exploring games and digital
        worlds, technology was never just a tool for me — it was a place where I
        connected, learned, and felt at home. Even while studying Agriculture, I
        realized that my real passion wasn’t in the field — it was in
        understanding how systems work, how problems are solved, and how
        software shapes real lives. That curiosity led me to web development,
        then deeper into programming fundamentals, and back again — this time
        with a clearer purpose: to become a strong software professional who
        understands technology, not just uses it. Today, I work as a Junior Full
        Stack Web Developer, building modern web applications using React,
        Node.js, and MongoDB. I’m driven by continuous learning, thoughtful
        problem-solving, and collaboration — combining technical growth with
        strong social intelligence and fairness in how I work with teams and
        clients. I bring a growth mindset, resilience, and a genuine love of
        learning. I’m not just looking for a job — I’m building a long-term
        career in software where I can grow into a high-impact developer and
        contribute to meaningful products.
      </motion.p>
    </motion.section>
  );
};

export default About;
