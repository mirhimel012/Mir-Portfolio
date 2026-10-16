
const projects = [
  {
    title: "AI Crop Recommendation",
    description: "An AI-powered system for recommending suitable crops.",
    tech: "Python · Machine Learning · IoT",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    tech: "React · Tailwind CSS",
  },
  {
    title: "Smart IoT System",
    description: "An IoT-based system for monitoring sensor data.",
    tech: "ESP8266 · Firebase",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">
        My Work
      </p>

      <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
        Projects.
      </h1>

      <p className="mt-5 max-w-2xl leading-8 text-text-muted">
        Here are some projects I've worked on and explored.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass glass-hover rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-text-muted">
              {project.description}
            </p>

            <p className="mt-5 text-xs text-accent">
              {project.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
