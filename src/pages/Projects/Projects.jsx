
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  BrainCircuit,
  Sprout,
  ShieldCheck,
  BookOpen,
  Plane,
  House,
  Code2,
} from "lucide-react";

const projects = [
  
  
  {
    title: "AI-Powered Soil Analysis & Crop Recommendation",
    subtitle: "AI/ML · Smart Agriculture · IoT",

    description:
      "An AI-powered system that trains and compares machine learning models using 7,000 records across 70 crop varieties. It combines real-world soil analysis with IoT sensor data to predict and recommend the most suitable crops for tested soil.",

    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Machine Learning",
      "IoT",
      "ESP32 / NodeMCU",
      "Firebase",
    ],

    category: "AI / ML",
    status: "In Progress",
    featured: true,
    icon: Sprout,

    github: "https://github.com/mirhimel012/smartcrop",
    demo: "",

    highlights: [
      "7,000 records covering 70 crop varieties",
      "Real-world soil sample collection and analysis",
      "IoT-based soil and environmental data collection",
      "Model evaluation using Accuracy, Precision, Recall, and F1-score",
      "AI-powered crop suitability recommendations",
    ],
  },
  {
    title: "Credit Card Fraud Detection",
    subtitle: "Machine Learning · Fraud Detection",
    description:
      "A machine-learning project focused on identifying potentially fraudulent credit card transactions through data preprocessing, classification, and performance evaluation.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    category: "AI / ML",
    status: "Project",
    featured: false,
    icon: ShieldCheck,
    github: "",
    demo: "https://www.kaggle.com/code/himelmir/credit-card-fraud-detection",
    highlights: [
      "Fraud classification",
      "Imbalanced-data challenges",
      "Precision, Recall and F1-score",
    ],
  },
  {
    title: "AmarGolpo",
    subtitle: "Full-Stack · Storytelling Platform",
    description:
      "A digital storytelling platform where readers can discover stories across genres and writers can contribute and share their work.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    category: "Web Development",
    status: "Live",
    featured: false,
    icon: BookOpen,
    github: "",
    demo: "https://amargolpo.vercel.app/",
    highlights: [
      "Story discovery and reading",
      "Genre-based browsing",
      "Story submission features",
    ],
  },
  {
    title: "TourAvels",
    subtitle: "Full-Stack · Travel & Tourism",
    description:
      "A travel agency web application that helps users explore tour packages and discover popular destinations across Bangladesh.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    category: "Web Development",
    status: "Project",
    featured: false,
    icon: Plane,
    github: "",
    demo: "https://touravels.vercel.app/",
    highlights: [
      "Tour package browsing",
      "Destination-focused interface",
      "Travel service experience",
    ],
  },
  {
    title: "Fantasy Home",
    subtitle: "Web Development · Real Estate",
    description:
      "A property discovery website designed to help users explore luxury listings, with search functionality and immersive property exploration features.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    category: "Web Development",
    status: "Project",
    featured: false,
    icon: House,
    github: "",
    demo: "https://fantasyhome.netlify.app/",
    highlights: [
      "Property search",
      "Interactive maps",
      "Virtual tour experience",
    ],
  },
];

const filters = ["All", "AI / ML", "Web Development"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const featuredProject = filteredProjects.find(
    (project) => project.featured
  );

  const otherProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <section className="mx-auto max-w-7xl px-5 pt-10 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.23em] text-accent">
          My Work
        </p>

        {/* <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Projects
          <span className="text-accent">.</span>
        </h1> */}

        <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
          A collection of things I have built and explored across
          full-stack development, machine learning, and intelligent
          applications.
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="mt-9 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
              activeFilter === filter
                ? "border-violet-400/40 bg-violet-400/15 text-violet-200"
                : "border-white/10 bg-white/[0.03] text-text-muted hover:border-white/20 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Featured Capstone */}
      {featuredProject && (
        <motion.article
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass glass-hover relative mt-8 overflow-hidden rounded-3xl border border-violet-400/20 p-6 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-violet-500/[0.12] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 size-56 rounded-full bg-cyan-500/[0.07] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
                  Featured Project
                </span>
                <span className="rounded-full border border-amber-300/20 bg-amber-400/[0.08] px-3 py-1 text-xs text-amber-200">
                  {featuredProject.status}
                </span>
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80">
                {featuredProject.subtitle}
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {featuredProject.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                {featuredProject.description}
              </p>

              <ul className="mt-5 space-y-3">
                {featuredProject.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs text-white/65"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={featuredProject.github || "https://github.com/mirhimel012"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-violet-400/30 bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
              >
                <Github size={16} />
                <span>View Repository</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            </div>
            
            {/* Capstone Project Diagram */}
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#10131d] p-3 sm:min-h-80 sm:p-5">
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-cyan-500/10 blur-3xl" />

              <img
                src="/images/soil-analysis-diagram.png"
                alt="AI-powered soil analysis and crop recommendation system architecture"
                className="relative z-10 h-full max-h-[520px] w-full rounded-xl object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </motion.article>
      )}

      {/* Other Projects */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {otherProjects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="glass glass-hover group flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-xl border border-violet-300/10 bg-violet-400/[0.08] p-3 text-violet-200 transition duration-300 group-hover:bg-violet-400/[0.15]">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-text-muted">
                  {project.category}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-semibold text-white">
                {project.title}
              </h2>

              <p className="mt-2 text-xs font-medium text-accent">
                {project.subtitle}
              </p>

              <p className="mt-4 flex-1 text-sm leading-7 text-text-muted">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-5 text-white/65"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-cyan-300/70" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[11px] text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.demo || project.github) && (
                <div className="mt-6 flex flex-wrap gap-4 border-t border-white/[0.08] pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-cyan-200"
                    >
                      <ExternalLink size={15} />
                      {project.category === "AI / ML"
                        ? "View on Kaggle"
                        : "Live Preview"}
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-violet-200"
                    >
                      <Github size={15} />
                      Repository
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="mt-8 rounded-2xl border border-white/10 p-10 text-center">
          <Code2 className="mx-auto text-text-muted" size={28} />
          <p className="mt-3 text-sm text-text-muted">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Closing */}
      <div className="mt-16 border-t border-white/10 pt-8 text-center">
        <p className="text-sm leading-7 text-text-muted">
          Always learning, building, and exploring new ideas.
        </p>
      </div>
    </section>
  );
}
