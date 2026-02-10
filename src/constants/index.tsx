/**
 * Types
 */

import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from "@/types/type";

/**
 * Assets
 */

import {
  Briefcase,
  Github,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  Palette,
  Rocket,
  Smartphone,
  User,
  Linkedin,
  CodeSquare,
} from "lucide-react";

const navLinks: LinksType[] = [
  { label: "Home", link: "#hero", icon: Home },
  {
    label: "Projects",
    link: "#projects",
    icon: Briefcase,
  },
  { label: "About", link: "#about", icon: User },

  { label: "Resume", link: "#resume", icon: FileText },

  { label: "Contact", link: "#contact", icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Linkedin,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/nour-eldin01/",
  },
  {
    icon: Github,
    label: "Github",
    link: "https://github.com/NotDefinitelyDev",
  },
  {
    icon: CodeSquare,
    label: "CodeWars",
    link: "https://www.codewars.com/users/NotDefinitelyDev",
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: "/images/pro1.png",
    title: "Full stack music app",
    tags: ["API", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/pro2.PNG",
    title: "Full stack music app",
    tags: ["API", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/pro3.PNG",
    title: "Full stack music app",
    tags: ["API", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/pro4.PNG",
    title: "Full stack music app",
    tags: ["API", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
];

const education: ExperienceType[] = [
  {
    year: "2021 – 2025",
    title: "Bachelor of Science in Agricultural Engineering",
    institute: "Alexandria University",
    desc: "Developed an AI-powered system for analyzing animal movement patterns through sensor-based data collection and processing (Best Graduation Project Award).",
  },
];

const experience: ExperienceType[] = [
  {
    year: "2025",
    title: "EYouth Business Development Intern (ITIDA Gigs)",
    institute: "Itida - EYouth",
    desc: " Engaged in weekly live webinars and guru mentorship sessions to refine business development strategies.",
  },
  {
    year: "2025",
    title: "Freelance Frontend Developer",
    institute: "Nafezly",
    desc: "Designed and developed web interfaces for clients using React, Tailwind, and Figma.",
  },

  {
    year: "2025 – 2026",
    title: "Fullstack Developer (MEAN) Intern ",
    institute: "National Telecommunication Institute (NTI)",
    desc: "Completed an intensive full-stack web development and freelancing program covering the MEAN stack (MongoDB, Express.js, Angular, Node.js). Gained hands-on experience in building scalable, secure web applications and managing projects from planning to deployment.",
  },
];

const tools: ToolsType[] = [
  {
    label: "Figma",
    imgSrc: "/images/tools/figma.svg",
  },
  {
    label: "CSS",
    imgSrc: "/images/tools/css3.svg",
  },
  {
    label: "Tailwind CSS",
    imgSrc: "/images/tools/tailwindcss.svg",
  },
  {
    label: "React",
    imgSrc: "/images/tools/react.svg",
  },
  {
    label: "JavaScript",
    imgSrc: "/images/tools/javascript.svg",
  },
  {
    label: "Node.js",
    imgSrc: "/images/tools/nodejs.svg",
  },
  {
    label: "Express.js",
    imgSrc: "/images/tools/expressjs.svg",
  },
  {
    label: "Mongodb",
    imgSrc: "/images/tools/mongodb.svg",
  },
  {
    label: "Typescript",
    imgSrc: "/images/tools/typescript.svg",
  },
  {
    label: "Docker",
    imgSrc: "/images/tools/docker.svg",
  },
  {
    label: "Git",
    imgSrc: "/images/tools/git.svg",
  },
  {
    label: "GitHub",
    imgSrc: "/images/tools/github.svg",
  },
  {
    label: "Angular",
    imgSrc: "/images/tools/angular.svg",
  },
  {
    label: "Redux",
    imgSrc: "/images/tools/redux.svg",
  },
  {
    label: "Postman",
    imgSrc: "/images/tools/postman.svg",
  },
  {
    label: "Linux",
    imgSrc: "/images/tools/linux.svg",
  },
  {
    label: "PugJs",
    imgSrc: "/images/tools/pug.svg",
  },
  {
    label: "Jest",
    imgSrc: "/images/tools/jest.svg",
  },
];

const services: ServiceType[] = [
  {
    title: "Brand Identity",
    desc: "I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.",
    projects: "32 Projects",
    icon: <Palette className="h-6 w-6 text-green-400" />,
  },
  {
    title: "UI/UX Design",
    desc: "Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.",
    projects: "47 Projects",
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Web Development",
    desc: "Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.",
    projects: "58 Projects",
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Mobile App Design",
    desc: "Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.",
    projects: "21 Projects",
    icon: <Smartphone className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Product Launch Strategy",
    desc: "Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.",
    projects: "15 Projects",
    icon: <Rocket className="h-6 w-6 text-green-400" />,
  },
];

const statsData: StatsType[] = [
  {
    number: "10+",
    label: "Happy Clients",
  },
  {
    number: "05+",
    label: "Years Of Experience",
  },
  {
    number: "30+",
    label: "Projects Done",
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: "Alex Tomato",
    role: "Brand Manager at Instant Design",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.",
    link: "#",
  },
  {
    name: "Sara Bloom",
    role: "Founder at Bloom Agency",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.",
    link: "#",
  },
  {
    name: "John Park",
    role: "CEO at PixelFlow",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.",
    link: "#",
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
