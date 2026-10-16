
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

const titles = [
  "Aspiring AI Engineer",
  "Python Developer",
  "Generative AI Enthusiast",
  "LLM & RAG Developer",
  "AI Agent Builder",
  "Writer & Author",
  "Frontend Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [connectFlipped, setConnectFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((current) => (current + 1) % titles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="home"
    className="relative isolate mx-auto flex min-h-[calc(100svh-90px)] max-w-6xl items-center overflow-hidden pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-4"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]"
      />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 min-w-0 lg:order-1"
        >
          {/* Availability / identity badge */}
          <p className="mb-3 text-lg font-medium tracking-wide text-violet-200 sm:text-xl">
            السلام عليكم
            </p>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-text-muted">
            Hello, I'm
        </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl">
            HIMEL
            <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-cyan-300 bg-clip-text pb-2 text-transparent">
              MIR
            </span>
          </h1>

          {/* Auto-changing title */}
          <div className="mt-5 flex min-h-[58px] items-center gap-3 sm:min-h-[64px]">
            <span className="h-9 w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-400 to-cyan-300" />

            <div className="min-w-0">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-text-muted sm:text-xs">
                I'm focused on
              </p>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={titles[titleIndex]}
                  initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-semibold text-violet-200 sm:text-2xl"
                >
                  {titles[titleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
            I'm a CSE student at Bangladesh University of Business & Technology,
            passionate about Artificial Intelligence, Generative AI, LLMs, NLP,
            and Deep Learning. I build with Python and modern web technologies,
            exploring intelligent applications that solve real-world problems.
          </p>

          {/* Focus areas */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Python", "Generative AI", "LLMs", "RAG", "AI Agents"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-text-muted transition hover:border-violet-300/30 hover:text-violet-200"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Explore My Work */}
            <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl border border-violet-300/30 bg-gradient-to-br from-violet-400 via-violet-400 to-purple-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(139,92,246,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200/60 hover:shadow-[0_12px_40px_rgba(139,92,246,0.40)] active:scale-95"
            >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Explore my work</span>
                <ArrowUpRight
                size={18}
                className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
            </a>

            {/* Liquid Flip Connect Button */}
            <div className="[perspective:1000px]">
                <div
                className="relative h-[54px] w-[170px] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                    transform: connectFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
                }}
                >

                <button
                    type="button"
                    onClick={() => setConnectFlipped(true)}
                    className="group absolute inset-0 flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/15 bg-white/[0.055] px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(103,232,249,0.07)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10"
                    style={{ backfaceVisibility: "hidden" }}
                    aria-label="Flip to reveal contact button"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-cyan-300/10 to-violet-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative">Let's connect</span>
                    <ArrowDown
                    size={16}
                    className="relative text-cyan-300 transition-transform duration-300 group-hover:translate-y-1"
                    />
                </button>

                <a
                    href="/contact"
                    className="absolute inset-0 flex items-center justify-center gap-2 rounded-xl border border-violet-300/40 bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 px-5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(139,92,246,0.25)] transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_8px_40px_rgba(139,92,246,0.45)]"
                    style={{
                    transform: "rotateX(180deg)",
                    backfaceVisibility: "hidden",
                    }}
                    aria-label="Open contact page"
                >
                    I'd love to collaborate! <ArrowUpRight size={17} />
                </a>
                </div>
            </div>
            </div>

        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="order-1 relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:order-2 lg:max-w-none"
        >
          {/* Portrait glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[75px]"
          />

          {/* Decorative rings */}
          {/* <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.12]"
          /> */}
          {/* <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.10]"
          /> */}

          <motion.img
            src="/himel-portrait.png"
            alt="Himel Mir, aspiring AI engineer and Python developer"
            fetchPriority="high"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_20px_55px_rgba(139,92,246,0.12)]"
          />

          {/* Floating label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-5 left-0 z-20 rounded-2xl border border-white/10 bg-[#10111a]/85 p-3.5 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-2 sm:p-4"
          >
            <div className="relative border-l-2 border-violet-400/70 py-2 pl-5">
            <p className="text-lg font-medium italic tracking-wide text-white sm:text-xl">
                "It's always <span className="text-violet-300">MIR</span> vs.{" "}
                <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                MIR"
                </span>
            </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
