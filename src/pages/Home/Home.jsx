
import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import FeaturedProjects from "./FeaturedProjects";
import ContactCTA from "./ContactCTA";

export default function Home() {
  return (
    <main className="relative overflow-hidden px-5 text-text-primary sm:px-8">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[35rem] -z-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <AboutPreview />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
