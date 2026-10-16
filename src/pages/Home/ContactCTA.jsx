
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-6xl border-t border-white/10 py-16 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass group relative overflow-hidden rounded-3xl p-7 sm:p-12 lg:p-14"
      >
        {/* Ambient gradient effects */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl transition-colors duration-500 group-hover:bg-violet-500/20" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-cyan-400/[0.07] blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text">
            Let's Connect
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Have something
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              meaningful in mind?
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
            Explore my work, discover my professional profiles, or reach out
            to discuss an idea, collaboration, or opportunity.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="group/button inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(139,92,246,0.4)]"
            >
              Explore My Profile
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </Link>
          </div>
        </div>

       
        {/* Solar System Full Animation */}  
        <div className="pointer-events-none absolute bottom-4 right-5 hidden h-64 w-64 items-center justify-center sm:flex lg:bottom-5 lg:right-8 lg:h-80 lg:w-80">
          {/* Sun glow */}
          <div className="absolute h-16 w-16 rounded-full bg-orange-400/20 blur-2xl lg:h-20 lg:w-20" />

          {/* Sun */}
          <div className="absolute z-10 h-5 w-5 rounded-full bg-gradient-to-br from-yellow-200 via-orange-400 to-red-500 shadow-[0_0_25px_rgba(251,146,60,0.8)] lg:h-7 lg:w-7" />

          {/* Mercury */}
          <div className="absolute h-10 w-10 rounded-full border border-white/10 animate-[spin_4s_linear_infinite]">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-stone-300 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>

          {/* Venus */}
          <div className="absolute h-[3.75rem] w-[3.75rem] rounded-full border border-white/10 animate-[spin_7s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.5)]" />
          </div>

          {/* Earth */}
          <div className="absolute h-[5.5rem] w-[5.5rem] rounded-full border border-cyan-300/15 animate-[spin_10s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-200 to-blue-600 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
          </div>

          {/* Mars */}
          <div className="absolute h-[7.25rem] w-[7.25rem] rounded-full border border-white/10 animate-[spin_14s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]" />
          </div>

          {/* Jupiter */}
          <div className="absolute h-[9rem] w-[9rem] rounded-full border border-white/10 animate-[spin_19s_linear_infinite]">
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-200 via-amber-500 to-red-300 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
          </div>

          {/* Saturn */}
          <div className="absolute h-[10.75rem] w-[10.75rem] rounded-full border border-white/10 animate-[spin_25s_linear_infinite]">
            <span className="absolute -top-2 left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-amber-200 shadow-[0_0_10px_rgba(253,230,138,0.5)]">
              <span className="absolute h-2 w-6 rotate-[-25deg] rounded-full border border-amber-100/80 bg-amber-400/30" />
            </span>
          </div>

          {/* Uranus */}
          <div className="absolute h-[12.5rem] w-[12.5rem] rounded-full border border-white/10 animate-[spin_32s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,0.6)]" />
          </div>

          {/* Neptune */}
          <div className="absolute h-[14.25rem] w-[14.25rem] rounded-full border border-violet-300/15 animate-[spin_40s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
          </div>

          {/* Background stars */}
          <span className="absolute left-8 top-10 h-1 w-1 rounded-full bg-cyan-200/70 animate-pulse" />
          <span className="absolute right-10 top-16 h-1.5 w-1.5 rounded-full bg-violet-300/70 animate-pulse" />
          <span className="absolute bottom-10 left-14 h-1 w-1 rounded-full bg-white/60 animate-pulse" />
          <span className="absolute bottom-16 right-8 h-1 w-1 rounded-full bg-cyan-200/60 animate-pulse" />
        </div>


      </motion.div>
    </section>
  );
}
