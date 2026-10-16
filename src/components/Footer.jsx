
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-auto w-full max-w-6xl border-t border-white/10 px-5 py-7 text-sm text-text-muted sm:px-8">
      <div className="glass flex flex-col gap-5 rounded-2xl px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-text-primary"
        >
          HIMEL<span className="text-accent"> MIR</span>
        </a>

        <p className="text-center">
          © {new Date().getFullYear()} Mir. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-white"
            >
              {social.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-text-muted/70">
        Hala Madrid
      </p>
    </footer>
  );
}
