
import { motion } from "motion/react";
import { SiKaggle } from "react-icons/si";
import { SiResearchgate } from "react-icons/si";
import { SiAcademia } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  FlaskConical,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
  Trophy,
  Twitter,
} from "lucide-react";

const email = "himelmir012@gmail.com";
const phone = "+8801764630254";
const whatsapp = "https://wa.me/8801764630254";

const profiles = [
  {
    name: "GitHub",
    description: "Projects, experiments & open-source work",
    href: "https://github.com/mirhimel012",
    icon: Github,
    category: "Development",
  },
  {
    name: "LinkedIn",
    description: "Professional connections & opportunities",
    href: "https://www.linkedin.com/in/mirhimel012",
    icon: Linkedin,
    category: "Professional",
  },
  {
    name: "Kaggle",
    description: "Data science & machine learning",
    href: "https://www.kaggle.com/himelmir",
    icon: SiKaggle,
    category: "AI & Data",
  },
  {
    name: "Codeforces",
    description: "Competitive programming & problem solving",
    href: "https://codeforces.com/profile/mirhimel012",
    icon: Trophy,
    category: "Programming",
  },
  {
  name: "ResearchGate",
  description: "Research interests & academic networking",
  href: "https://www.researchgate.net/profile/Himel-Mir",
  icon: SiResearchgate,
  category: "Research",
  },
  {
  name: "Academia.edu",
  description: "Academic interests & scholarly work",
  href: "https://bubt.academia.edu/HIMELMIR",
  icon: SiAcademia,
  category: "Academic",
  },
  {
    name: "Medium",
    description: "Writing, ideas & personal perspectives",
    href: "https://medium.com/@himelmir012",
    icon: BookOpen,
    category: "Writing",
  },
];

const socials = [
 
  {
    name: "Facebook",
    href: "https://www.facebook.com/mirhimel012",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mirhimel012",
    icon: Instagram,
  },
  {
    name: "X / Twitter",
    href: "https://x.com/mirhimel012",
    icon: Twitter,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-transparent bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text sm:text-sm">
      {children}
    </p>
  );
}

function ProfileCard({ profile, index }) {
  const Icon = profile.icon;

  return (
    <motion.a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      whileHover={{ y: -5 }}
      className="glass glass-hover group relative flex min-h-[170px] flex-col rounded-2xl p-5 transition-colors duration-300 hover:border-violet-400/30 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:text-cyan-300">
          <Icon size={21} strokeWidth={1.7} />
        </div>

        <ArrowUpRight
          size={19}
          className="text-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
        />
      </div>

      <div className="mt-5">
        <p className="text-lg font-semibold tracking-tight text-text-primary">
          {profile.name}
        </p>
        <p className="mt-2 text-sm leading-6 text-text-muted">
          {profile.description}
        </p>
      </div>

      <span className="mt-auto pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300/70">
        {profile.category}
      </span>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section className="relative isolate mx-auto w-full max-w-6xl overflow-hidden px-5 pb-20 pt-10 text-text-primary sm:px-8 sm:pb-28 sm:pt-14 lg:pb-20 lg:pt-12">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 size-80 rounded-full bg-violet-600/[0.12] blur-[110px] sm:size-[450px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[520px] -z-10 size-72 rounded-full bg-cyan-500/[0.07] blur-[110px]"
      />

      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.65 }}
        className="relative"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2">
          <SectionLabel>Let's Connect</SectionLabel>
        </div>

        <h1 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
          Great things begin
          <br />
          with a{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            conversation
          </span>
        </h1>

        {/* <p className="mt-7 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
          Have an idea, a project, or an opportunity in mind? I'm always happy
          to connect with curious minds, exchange ideas, and explore what we
          can build together.
        </p> */}

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.06]"
          >
            Explore my profiles
            <ArrowDownRight size={16} className="text-violet-300" />
          </a>
        </div>

      </motion.div>

      {/* Direct contact */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-2"
      >
        <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Mail size={22} />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-text-muted">The best way to reach me</p>
              <h2 className="mt-1 text-lg font-semibold">Email me</h2>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="mt-6 block break-all text-sm font-medium text-violet-300 transition-colors hover:text-cyan-300 sm:text-base"
          >
            {email}
          </a>

          <a
            href={`mailto:${email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-cyan-300"
          >
            Send an email <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
              <MessageCircle size={22} />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-text-muted">Prefer a quick chat?</p>
              <h2 className="mt-1 text-lg font-semibold">WhatsApp</h2>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-sm font-medium text-emerald-300 transition-colors hover:text-cyan-300 sm:text-base"
          >
            {phone}
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-emerald-300"
          >
            Message me on WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Professional profiles */}
      <div id="connect" className="scroll-mt-24 pt-20 sm:pt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Find Me Online</SectionLabel>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Where ideas meet{" "}
              <span className="text-violet-300">opportunity</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-text-muted">
              Explore my work, follow my learning journey, or connect with me
              on the platforms that interest you.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.name} profile={profile} index={index} />
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="mt-20 border-t border-white/10 pt-10 sm:mt-24 sm:pt-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>Stay Connected</SectionLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              A little more social.
            </h2>
            <p className="mt-2 text-sm leading-7 text-text-muted">
              Follow along for updates, thoughts, and moments beyond code.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.07] hover:text-text-primary"
                >
                  <Icon
                    size={17}
                    className="transition-colors group-hover:text-violet-300"
                  />
                  {social.name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="relative mt-16 overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-cyan-400/[0.06] p-7 sm:mt-20 sm:p-10 lg:p-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-violet-500/10 blur-[75px]"
        />

        <div className="relative max-w-3xl">
          <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300">
            <Code2 size={21} />
          </div>

          <h2 className="mt-6 text-2xl font-bold leading-snug sm:text-3xl">
            Let's turn a good idea into{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              something meaningful
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8">
            Whether it's an AI-powered idea, a development project, a research
            discussion, or simply a conversation about technology and writing,
            I'd love to hear from you.
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-violet-300/20 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-cyan-300/30 hover:bg-violet-500/20"
          >
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
