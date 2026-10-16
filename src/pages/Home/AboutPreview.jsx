
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Brain, Cpu } from "lucide-react";

const skills = [
  {
    title: "Web Development",
    description: "Building responsive websites and modern digital experiences.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    description: "Exploring intelligent applications and data-driven solutions.",
    icon: Brain,
  },
  {
    title: "IoT & Smart Systems",
    description: "Connecting devices, sensors, and software to solve problems.",
    icon: Cpu,
  },
];

export default function AboutPreview() {
  return (
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
        I'm passionate about building useful digital experiences and exploring
        how technology can solve real-world problems.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <Icon size={25} className="text-accent" />

              <h3 className="mt-5 text-lg font-semibold">{skill.title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                {skill.description}
              </p>
            </motion.article>
          );
        })}
      </div>

      <a
        href="/about"
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-violet-300"
      >
        More about me <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
