
import { motion } from "motion/react";
import { ArrowUpRight, Sprout, ShieldCheck, BookOpen, Compass } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / MACHINE LEARNING",
    title: "AI Soil Analysis & Crop Recommendation",
    description:
      "An AI-powered capstone project combining machine learning and real-world soil analysis to recommend suitable crops.",
    tags: ["Python", "Scikit-learn", "IoT"],
    icon: Sprout,
    featured: true,
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning project focused on identifying potentially fraudulent credit card transactions from data.",
    tags: ["Python", "Pandas", "ML"],
    icon: ShieldCheck,
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "AmarGolpo",
    description:
      "A web project built to deliver a clean, engaging, and user-friendly browsing experience.",
    tags: ["React", "JavaScript", "Web"],
    icon: BookOpen,
    link: "https://amargolpo.vercel.app/",
  },
  {
    number: "04",
    category: "WEB DEVELOPMENT",
    title: "TourAvels",
    description:
      "A travel-focused web project showcasing modern interface design and responsive web development.",
    tags: ["React", "UI/UX", "Responsive"],
    icon: Compass,
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects that bring ideas to life
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted sm:text-base">
            From intelligent machine learning systems to modern web
            experiences, explore some of the projects I've been building.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.a
              key={project.number}
              href="/projects"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
              className={`group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border p-5 transition-colors duration-300 sm:p-7 ${
                project.featured
                  ? "border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.04] to-cyan-500/[0.05] hover:border-violet-400/50"
                  : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              {project.featured && (
                <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-violet-500/10 blur-3xl" />
              )}

              <div className="relative flex items-center justify-between">
                
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-xs font-semibold tabular-nums text-violet-300">
                  {project.number}
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted sm:text-[11px]">
                  Selected Project
                </span>
              </div>

                <ArrowUpRight
                  size={19}
                  className="text-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>

              <div className="relative mt-6 flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-accent transition-colors group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-[11px]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="relative mt-4 text-sm leading-6 text-text-muted">
                {project.description}
              </p>

              <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-[11px] text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="sr-only">View project details</span>
            </motion.a>
          );
        })}
      </div>

      <div className="mt-7 flex justify-center sm:mt-9">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/30 hover:bg-violet-500/10"
        >
          View all projects
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
