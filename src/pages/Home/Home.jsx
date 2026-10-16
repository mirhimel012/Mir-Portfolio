
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const skills = [
  {
    title: "Web Development",
    description:
      "Building responsive interfaces and modern web experiences.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring AI, machine learning, and intelligent applications.",
  },
  {
    title: "IoT & Smart Systems",
    description:
      "Connecting hardware, sensors, software, and real-world data.",
  },
];

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
      "Exploring emerging technologies and turning research ideas into prototypes.",
    tags: ["Research", "AI", "Innovation"],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden px-5 text-text-primary sm:px-8">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[35rem] -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl items-center py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Developer · Learner · Builder
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Building digital
            <br />
            experiences with
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              purpose &amp; creativity.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            I'm a frontend developer and Computer Science student exploring
            web development, artificial intelligence, machine learning,
            and innovative technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-300"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium transition hover:border-violet-400/40"
            >
              Let's connect
              <ArrowDown size={17} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap items-center gap-5 text-sm text-text-muted">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl border-t border-white/10 py-20"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          01 / About me
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Curiosity drives my journey.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted">
          I'm passionate about building useful digital experiences and
          exploring how technology can solve real-world problems. My
          interests combine frontend development, AI, machine learning,
          and creative problem-solving.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold">{skill.title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                {skill.description}
              </p>
            </motion.article>
          ))}
        </div>

        <a
          href="/about"
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-violet-300"
        >
          More about me <ArrowUpRight size={16} />
        </a>
      </section>

      {/* Projects Preview */}
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
          A preview of the areas I work in. More project details,
          technologies, repositories, and demos can be added later.
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

              <h3 className="mt-6 text-xl font-semibold">
                {project.title}
              </h3>

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

      {/* Contact Preview */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl border-t border-white/10 py-20"
      >
        <div className="glass rounded-3xl p-7 sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            03 / Contact
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
            Let's build something meaningful.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-text-muted">
            Have a project idea, collaboration opportunity, or something
            interesting to discuss? I'd love to hear from you.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-300"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
