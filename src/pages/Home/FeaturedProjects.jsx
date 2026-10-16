
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Intelligent applications, predictive models, and experiments with data.",
    tags: ["Python", "Machine Learning", "AI"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern websites with responsive layouts and thoughtful user experiences.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "IoT & Smart Systems",
    description:
      "Connected devices, sensor data, and practical automation solutions.",
    tags: ["IoT", "Firebase", "Embedded Systems"],
  },
  {
    number: "04",
    title: "Research & Experiments",
    description:
      "Exploring emerging technologies and turning ideas into prototypes.",
    tags: ["Research", "AI", "Innovation"],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl border-t border-white/10 py-20"
    >
      <p className="text-sm uppercase tracking-[0.2em] text-accent">
        02 / Selected work
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Ideas turned into projects.
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-text-muted">
        A preview of the areas I work in. Project details and live demos can be
        added as the portfolio develops.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass glass-hover rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-accent">
                PROJECT / {project.number}
              </span>
              <ArrowUpRight size={20} className="text-text-muted" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-sm leading-7 text-text-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <a
        href="/projects"
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-violet-300"
      >
        View all projects <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
