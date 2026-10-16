
export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">
        Contact
      </p>

      <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
        Let's connect.
      </h1>

      <p className="mt-6 max-w-2xl leading-8 text-text-muted">
        Have a project idea or want to collaborate? Feel free to reach out.
      </p>

      <div className="glass mt-10 max-w-xl rounded-2xl p-6">
        <p className="text-lg font-semibold text-white">
          Get in touch
        </p>

        <p className="mt-3 text-text-muted">
          Email: your.email@example.com
        </p>

        <a
          href="mailto:your.email@example.com"
          className="mt-5 inline-block rounded-xl bg-accent px-5 py-3 font-semibold text-slate-950 transition hover:bg-violet-300"
        >
          Send Email ↗
        </a>
      </div>
    </section>
  );
}
