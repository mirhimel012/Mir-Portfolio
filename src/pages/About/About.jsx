
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          About me
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          My journey, skills &amp; goals.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
          I'm a Computer Science student and aspiring developer interested in
          frontend development, artificial intelligence, machine learning,
          and building technology that solves real-world problems.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <p className="mt-3 leading-7 text-text-muted">
              Computer Science and Engineering at Daffodil International
              University.
            </p>
          </article>

          <article className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Interests</h2>
            <p className="mt-3 leading-7 text-text-muted">
              Web development, AI, machine learning, IoT, research, and
              continuous learning.
            </p>
          </article>
        </div>
      </motion.div>
    </section>
  );
}
