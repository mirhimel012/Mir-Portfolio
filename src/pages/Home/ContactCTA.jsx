
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
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
  );
}
