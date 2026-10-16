
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BrainCircuit,
  BookOpen,
  Compass,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "The Mindset",
    description:
      "Curiosity keeps me exploring AI, understanding how things work, and turning what I learn into something useful.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "The Journey",
    description:
      "From computer science fundamentals to intelligent applications, I'm building my skills one idea and one project at a time.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Beyond Code",
    description:
      "I’m a technologist with a writer’s heart. Though I’m not a professional writer, I love putting meaningful stories into words and preserving moments that deserve to be remembered.",
    icon: BookOpen,
  },
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-6xl border-t border-white/10 py-20 sm:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-16">
        {/* Story introduction */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            The Story Behind Me
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            More than what
            <span className="block bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text pb-2 text-transparent">
              meets the eye
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-text-muted">
            Every journey is shaped by the things we choose to learn,
            the challenges we face, and the stories we carry. Mine
            brings together a passion for intelligent technology, a
            commitment to personal growth, and a desire to preserve
            meaningful experiences through writing.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-text-muted">
            There's more to my journey than a degree or a list of
            technologies. Here's a little more about what drives me,
            what I'm learning, and what I hope to build.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-violet-300/25 bg-violet-400/[0.07] px-5 py-3.5 text-sm font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-violet-400/[0.12] hover:text-white"
          >
            Discover my story
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Personal highlights */}
        <div className="space-y-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -3 }}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/[0.08] text-violet-200 transition-colors duration-300 group-hover:border-cyan-300/25 group-hover:text-cyan-200">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <span className="text-xs font-medium tracking-widest text-text-muted/70">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
