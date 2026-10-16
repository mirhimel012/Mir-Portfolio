
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  UserRound,
  FolderKanban,
  BookOpen,
  Plane,
  Mail,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: UserRound },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Book", path: "/book", icon: BookOpen },
  { label: "Travel", path: "/travel", icon: Plane },
  { label: "Contact", path: "/contact", icon: Mail },
];

const desktopLinkClass = ({ isActive }) =>
  `group relative flex items-center gap-2 rounded-full border px-3.5 py-2.5 text-sm transition-all duration-300 xl:px-4 ${
    isActive
      ? "border-violet-300/30 bg-violet-400/10 text-violet-100 shadow-[0_0_12px_rgba(167,139,250,0.18),inset_0_0_12px_rgba(167,139,250,0.08)]"
      : "border-transparent text-text-muted hover:border-white/10 hover:bg-white/5 hover:text-white"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `flex items-center gap-2 rounded-xl border p-3 text-sm transition-all duration-300 ${
    isActive
      ? "border-violet-300/30 bg-violet-400/10 text-violet-100 shadow-[0_0_12px_rgba(167,139,250,0.15)]"
      : "border-transparent text-text-muted hover:border-white/10 hover:bg-white/5 hover:text-white"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto w-full max-w-6xl px-5 pt-5 sm:px-8">
      <nav className="glass relative flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-xl font-bold tracking-tight text-white"
        >
          HIMEL<span className="text-accent"> MIR</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1.5 lg:flex">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={desktopLinkClass}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={16}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-violet-200 drop-shadow-[0_0_5px_rgba(196,181,253,0.6)]"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

         
        {/* Premium Resume Button */}
        <a
        href="/Mir_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative hidden items-center gap-2 overflow-hidden rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-violet-100 shadow-[0_0_15px_rgba(139,92,246,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/60 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] sm:inline-flex"
        >
        {/* Hover Glow */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative z-10">Resume</span>

        <ArrowUpRight
            size={16}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        </a>


        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition hover:border-violet-300/30 hover:bg-violet-400/10 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="glass mt-3 rounded-2xl border border-white/10 p-3 shadow-2xl lg:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={17}
                        className={
                          isActive
                            ? "text-violet-200 drop-shadow-[0_0_5px_rgba(196,181,253,0.5)]"
                            : ""
                        }
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          
            {/* Premium Mobile Resume */}
            <a
            href="/Mir_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-500/15 via-purple-500/10 to-cyan-400/10 px-4 py-3 text-sm font-semibold text-violet-100 shadow-[0_0_15px_rgba(139,92,246,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-violet-300/60 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] sm:hidden"
            >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10">View Resume</span>

            <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            </a>

        </div>
      )}
    </header>
  );
}
