
import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, CheckCircle2, Clock, Search } from "lucide-react";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Personal Growth",
    status: "Completed",
    description:
      "A practical guide to building good habits, breaking bad ones, and improving a little every day.",
    color: "from-amber-400/20 to-orange-500/5",
    initials: "AH",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    status: "Reading",
    description:
      "Learn how to write readable, maintainable, and professional software code.",
    color: "from-cyan-400/20 to-blue-500/5",
    initials: "CC",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    category: "Programming",
    status: "Want to Read",
    description:
      "Practical ideas and techniques for becoming a more effective software developer.",
    color: "from-violet-400/20 to-purple-500/5",
    initials: "PP",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    status: "Want to Read",
    description:
      "Strategies for focused work and producing valuable results in a distracted world.",
    color: "from-emerald-400/20 to-teal-500/5",
    initials: "DW",
  },
  {
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    category: "Programming",
    status: "Reading",
    description:
      "A deeper look at JavaScript fundamentals for developers who want to improve their skills.",
    color: "from-yellow-400/20 to-amber-500/5",
    initials: "JS",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Personal Growth",
    status: "Completed",
    description:
      "Lessons about how people think about money, risk, wealth, and financial decisions.",
    color: "from-pink-400/20 to-rose-500/5",
    initials: "PM",
  },
];

const categories = [
  "All",
  "Programming",
  "Personal Growth",
  "Productivity",
];

const statusStyles = {
  Completed: "text-emerald-300 bg-emerald-400/10",
  Reading: "text-cyan-300 bg-cyan-400/10",
  "Want to Read": "text-violet-300 bg-violet-400/10",
};

export default function Book() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      category === "All" || book.category === category;

    const matchesSearch =
      `${book.title} ${book.author} ${book.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const completed = books.filter(
    (book) => book.status === "Completed"
  ).length;

  const currentlyReading = books.filter(
    (book) => book.status === "Reading"
  ).length;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
          My Reading Corner
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Books that shape{" "}
          <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            my thinking.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
          A collection of books I'm reading, have completed, or plan to
          explore. From software development to personal growth, every
          book offers an opportunity to learn something new.
        </p>
      </motion.div>

      {/* Reading Stats */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={<BookOpen size={20} />}
          label="Total Books"
          value={books.length}
        />
        <StatCard
          icon={<CheckCircle2 size={20} />}
          label="Completed"
          value={completed}
        />
        <StatCard
          icon={<Clock size={20} />}
          label="Currently Reading"
          value={currentlyReading}
        />
      </div>

      {/* Search and Categories */}
      <div className="mt-14 flex flex-col gap-5">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search books or authors..."
            aria-label="Search books or authors"
            className="glass w-full rounded-xl py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-text-muted focus:border-violet-400/50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm transition duration-200 ${
                category === item
                  ? "border-violet-400/40 bg-violet-500/20 text-white"
                  : "border-white/10 bg-white/[0.03] text-text-muted hover:border-white/20 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Book Grid */}
      <motion.div
        layout
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredBooks.map((book, index) => (
          <motion.article
            layout
            key={book.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="glass glass-hover group overflow-hidden rounded-2xl"
          >
            {/* Decorative Book Cover */}
            <div
              className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${book.color}`}
            >
              <div className="absolute inset-3 rounded-xl border border-white/10" />
              <span className="text-5xl font-bold tracking-tight text-white/80">
                {book.initials}
              </span>
              <BookOpen
                size={20}
                className="absolute bottom-5 right-5 text-white/50"
              />
            </div>

            <div className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-accent">
                  {book.category}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs ${statusStyles[book.status]}`}
                >
                  {book.status}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white transition-colors group-hover:text-violet-200">
                {book.title}
              </h2>

              <p className="mt-1 text-sm text-text-muted">
                by {book.author}
              </p>

              <p className="mt-4 text-sm leading-7 text-text-muted">
                {book.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {filteredBooks.length === 0 && (
        <div className="glass mt-8 rounded-2xl px-5 py-12 text-center">
          <BookOpen className="mx-auto text-text-muted" size={30} />
          <h2 className="mt-4 text-lg font-semibold text-white">
            No books found
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Try another search term or category.
          </p>
        </div>
      )}

      {/* Bottom Note */}
      <div className="glass mt-12 rounded-2xl p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          A small reminder
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          Learn something every day.
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-text-muted">
          Reading is a journey, not a race. I'm building my knowledge
          one page at a time.
        </p>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="glass glass-hover rounded-2xl p-5">
      <div className="flex items-center gap-3 text-accent">
        {icon}
        <span className="text-sm text-text-muted">{label}</span>
      </div>
      <p className="mt-4 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
