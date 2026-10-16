
const places = [
  {
    name: "Cox's Bazar",
    country: "Bangladesh",
    description: "Enjoying the sea, beaches, and beautiful sunsets.",
  },
  {
    name: "Sajek Valley",
    country: "Bangladesh",
    description: "Exploring green hills, clouds, and mountain views.",
  },
  {
    name: "Switzerland",
    country: "Dream Destination",
    description: "A dream to explore the Alps and beautiful landscapes.",
  },
];

export default function Travel() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">
        Travel Journal
      </p>

      <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
        Places & Adventures.
      </h1>

      <p className="mt-5 max-w-2xl leading-8 text-text-muted">
        A little collection of places I'd love to explore and
        experiences that inspire me to see more of the world.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <article
            key={place.name}
            className="glass glass-hover rounded-2xl p-6"
          >
            <p className="text-xs uppercase tracking-widest text-accent">
              {place.country}
            </p>

            <h2 className="mt-3 text-xl font-semibold text-white">
              {place.name}
            </h2>

            <p className="mt-3 text-sm leading-7 text-text-muted">
              {place.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
