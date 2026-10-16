
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  Lightbulb,
  Network,
  PenTool,
  Sparkles,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    description: "Building intelligent, data-driven systems.",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Large Language Models",
      "Natural Language Processing",
      "Transformers",
    ],
    accent: "violet",
  },
  {
    title: "AI Engineering",
    description: "Connecting models to practical applications.",
    icon: Network,
    skills: [
      "FastAPI",
      "REST APIs",
      "Model Integration",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Agentic Systems",
    ],
    accent: "cyan",
  },
  {
    title: "Python & Data Science",
    description: "From data analysis to model development.",
    icon: Terminal,
    skills: [
      "Python",
      "C",
      "C++",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    accent: "violet",
  },
  {
    title: "ML Frameworks",
    description: "Exploring frameworks for intelligent systems.",
    icon: Cpu,
    skills: ["TensorFlow", "PyTorch"],
    accent: "cyan",
  },
  {
    title: "Web Development",
    description: "Creating responsive, user-focused applications.",
    icon: Code2,
    skills: [
      "HTML & CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
    accent: "violet",
  },
  {
    title: "Databases & Tools",
    description: "Supporting development and application infrastructure.",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "Firebase",
      "Git",
      "GitHub",
      "Docker",
    ],
    accent: "cyan",
  },
];

const journey = [
  {
    number: "01",
    title: "Engineering Fundamentals",
    description:
      "Building a strong foundation in computer science, programming, and problem-solving through my CSE studies.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Learning to create responsive interfaces and connect them with backend services, APIs, and databases.",
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Deepening my knowledge of machine learning, deep learning, Generative AI, LLMs, NLP, and AI agents.",
  },
  {
    number: "04",
    title: "Building What's Next",
    description:
      "Combining software engineering and AI to develop useful, scalable, and intelligent applications.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};


export default function About() {
  return (
    <main className="relative isolate mx-auto w-full max-w-6xl overflow-hidden px-5 pt-8 pb-12 text-text-primary sm:px-8 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[42rem] -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Introduction */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative"
      >
        <div className="mb-6 inline-flex items-center rounded-full border border-violet-300/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-violet-200 sm:text-sm">
          GET TO KNOW ME
        </div>

      <p className="max-w-4xl text-xl font-medium leading-relaxed text-text-muted sm:text-2xl lg:text-3xl">
        I am the sum of my choices—good or bad, every decision has shaped the
        person I am today.
      </p>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
          I'm Himel Mir, a Computer Science and Engineering student at
          Bangladesh University of Business & Technology (BUBT). I'm working
          toward becoming an AI Engineer, combining software engineering
          fundamentals with my interest in intelligent systems, Generative AI,
          and modern application development.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
          I enjoy learning how technology works, turning ideas into practical
          solutions, and exploring ways AI can solve meaningful real-world
          problems. My journey is driven by curiosity, consistent learning,
          and a desire to build things that are genuinely useful.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Aspiring AI Engineer",
            "Python Developer",
            "Generative AI",
            "LLMs & RAG",
            "Writer & Author",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs text-text-muted transition-colors hover:border-violet-300/30 hover:text-violet-200 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#skills"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition-colors hover:text-cyan-200"
        >
          Explore my capabilities
          <ArrowDownRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
          />
        </a>
      </motion.section>

      {/* Education */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mt-20 sm:mt-28"
      >
        <SectionHeading
          eyebrow="EDUCATION"
          title="Where I'm learning"
          description="Building the foundations for a career in intelligent software engineering."
        />

        <article className="glass glass-hover group relative mt-8 overflow-hidden rounded-3xl p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet-500/10 blur-[70px] transition-colors group-hover:bg-violet-500/20"
          />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
              <GraduationCap size={27} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  B.Sc. in Computer Science & Engineering
                </h3>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-200">
                  In progress
                </span>
              </div>

              <p className="mt-2 text-base text-violet-200">
                Bangladesh University of Business & Technology (BUBT)
              </p>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                Developing a foundation in computer science, programming,
                software development, and analytical problem-solving while
                exploring AI, machine learning, and intelligent applications.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-text-muted sm:text-sm">
                <span className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2">
                  Bachelor's Degree
                </span>
                <span className="h-1 w-1 rounded-full bg-violet-300" />
                <span>Expected graduation: 2027</span>
              </div>
            </div>
          </div>
        </article>
      </motion.section>

      {/* Technical skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mt-20 scroll-mt-24 sm:mt-28"
      >
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Skills & technologies"
          description="A growing collection of technologies I use, study, and explore across AI engineering and software development."
        />

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const isCyan = group.accent === "cyan";

            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-5 sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-[60px] transition-opacity group-hover:opacity-100 ${
                    isCyan ? "bg-cyan-400/10" : "bg-violet-500/10"
                  }`}
                />

                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl border ${
                    isCyan
                      ? "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200"
                      : "border-violet-300/20 bg-violet-400/[0.08] text-violet-200"
                  }`}
                >
                  <Icon size={21} />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-text-muted">
                  {group.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs leading-5 text-text-muted transition-colors hover:border-violet-300/25 hover:text-violet-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-6 text-text-muted">
          My toolkit continues to evolve as I learn, experiment, and build new
          projects.
        </p>
      </motion.section>

      {/* Personal journey */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mt-20 sm:mt-28"
      >
        <SectionHeading
          eyebrow="MY JOURNEY"
          title="Learning with purpose"
          description="The areas shaping my development as an engineer."
        />

        <div className="relative mt-9 space-y-4">
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[19px] top-10 hidden w-px bg-gradient-to-b from-violet-400/50 via-cyan-300/30 to-transparent sm:block"
          />

          {journey.map((item, index) => (
            <motion.article
              key={item.number}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass glass-hover relative rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-[#151220] text-xs font-bold text-violet-200">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Writing and authorship */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mt-20 sm:mt-28"
      >
        <SectionHeading
          eyebrow="BEYOND TECHNOLOGY"
          title="Author & Creator"
          description="An important part of my journey beyond code and engineering."
        />
        
        <article className="glass group relative mt-8 overflow-hidden rounded-3xl p-6 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-violet-500/10 blur-[90px] transition-colors group-hover:bg-violet-500/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-[80px]"
          />

          <div className="relative grid gap-7 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
              <BookOpen size={30} strokeWidth={1.6} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  <PenTool size={14} />
                  My First Book
                </span>

                <span className="rounded-full border border-violet-300/20 bg-violet-400/[0.07] px-3 py-1 text-xs text-violet-200">
                  122 Pages
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                জুলাইয়ের রক্তিম সকাল
              </h3>

              <p className="mt-2 text-base font-medium text-violet-200 sm:text-lg">
                A Generation's History — A Witness's Account of Bangladesh's July 2024 Uprising
              </p>

              <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
                My first book, “জুলাইয়ের রক্তিম সকাল,” is a personal account of
                Bangladesh's July 2024 uprising, written from the perspective of
                someone who witnessed those historic days firsthand. Through my
                experiences in Mirpur and my reflections on the movement, I sought
                to preserve the memories, struggles, courage, and sacrifices of
                a generation that stood up for justice, dignity, and the right
                to speak freely. This book is not a definitive history; it is my
                testimony as a witness and my contribution to keeping those
                memories alive for future generations.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                <Lightbulb
                  size={19}
                  className="mt-0.5 shrink-0 text-violet-200"
                />
                <p className="text-sm leading-6 text-text-muted">
                  I believe history lives on through the memories of those who
                  experienced it, the stories they preserve, and the courage to
                  pass those stories on to the next generation.
                </p>
              </div>

              <Link
                to="/book"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/20"
              >
                <BookOpen size={18} />
                Read My Book
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </article>

      </motion.section>

      {/* Closing statement */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mt-20 sm:mt-28"
      >
        <div className="relative overflow-hidden rounded-3xl border border-violet-300/15 bg-gradient-to-br from-violet-500/[0.12] via-[#10121c] to-cyan-400/[0.06] p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[90px]"
          />

          
        <div className="relative max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-200">
            What's Next
          </p>

          
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ
            <span
              lang="en"
              className="mt-4 block text-lg font-medium leading-relaxed text-violet-200 sm:text-xl"
            >
              “And whoever relies upon Allah—then He is sufficient for them.”
            </span>
            <span className="mt-3 block text-sm font-medium tracking-wide text-text-muted">
              — Qur’an 65:3
            </span>
          </h2>


          <p className="mt-5 max-w-2xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
            I believe in Allah, trust His plan, and keep moving forward with
            patience and purpose. I'll continue learning, making choices,
            facing challenges, and doing my best. The future is unknown,
            but I'll keep working hard and leave the rest to Allah.
          </p>

          <a
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-400 to-violet-300 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(167,139,250,0.15)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(167,139,250,0.3)]"
          >
            Let's connect
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        </div>
      </motion.section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}
