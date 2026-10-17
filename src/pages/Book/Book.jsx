
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Feather,
  FileText,
  Heart,
  Sparkles,
} from "lucide-react";

import BookReader from "./BookReader";

const frontCover = "/images/july-front.png";

const readerPhotos = [
  {
    src: "/images/book-gifting-1.jpeg",
    caption: "A book finding its reader",
  },
  {
    src: "/images/book-gifting-2.jpeg",
    caption: "Sharing a piece of history",
  },
  {
    src: "/images/book-gifting-3.jpeg",
    caption: "Memories beyond the pages",
  },
  // {
  //   src: "/images/book-gifting-4.jpeg",
  //   caption: "Another reader, another memory",
  // },
  // {
  //   src: "/images/book-gifting-5.jpeg",
  //   caption: "Stories shared with pride",
  // },
  // {
  //   src: "/images/book-gifting-6.jpeg",
  //   caption: "A story that connects us",
  // },
];

export default function Book() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent">
            <Feather size={16} className="text-violet-300" />
            My Writing Journey
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Stories I write
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Memories we keep
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            Every book begins with something worth remembering. This is where
            I share my writing, the stories behind my books, and the words I
            hope will find their way to you.
          </p>

          <a
            href="#published-book"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full border border-violet-300/30 bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1 hover:from-violet-500 hover:to-purple-500 hover:shadow-violet-500/40"
          >
            Discover My Book
            <ArrowDown size={18} className="shrink-0" />
          </a>

        </motion.div>

        <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-4 text-center sm:mt-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <BookOpen size={21} className="text-violet-300" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>
      </section>

      
      {/* MY FIRST BOOK */}
      <section
        id="published-book"
        className="relative isolate mx-auto max-w-7xl scroll-mt-24 overflow-hidden px-5 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-20 lg:pb-24"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[8%] top-[25%] size-72 rounded-full bg-red-500/[0.08] blur-[110px]" />
          <div className="absolute bottom-[10%] right-[8%] size-72 rounded-full bg-violet-500/[0.07] blur-[110px]" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: FRONT COVER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto w-full max-w-md"
          >
            {/* Section label */}
            <div className="mb-8 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-200/80 sm:text-xs">
                <Feather size={15} />
                A Personal Literary Journey
              </span>
            </div>

            {/* Cover presentation */}
            
            <div className="relative mx-auto w-full max-w-[390px] px-4 pb-5 pt-8 sm:px-8">

              {/* Ambient spotlight */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-500/20 via-orange-400/[0.08] to-violet-500/15 blur-[70px]" />

              {/* Subtle background rings */}
              <div className="pointer-events-none absolute inset-5 rounded-[45%] border border-white/[0.035]" />
              <div className="pointer-events-none absolute inset-10 rounded-[45%] border border-white/[0.035]" />

              {/* Main book */}
              <motion.div
                whileHover={{ y: -8, rotateY: -5, rotateZ: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                style={{ transformStyle: "preserve-3d", perspective: 1200 }}
                className="relative mx-auto w-[76%] max-w-[270px]"
              >
                {/* Deep ambient shadow */}
                <div className="absolute -inset-5 translate-y-6 rounded-2xl bg-black/60 blur-2xl" />

                {/* Book depth / spine */}
                <div
                  className="absolute -left-[9px] top-[5px] h-[calc(100%-10px)] w-[13px] rounded-l-[3px] border-y border-l border-white/10 bg-gradient-to-r from-[#171018] via-[#4b2026] to-[#24131a] shadow-lg"
                  style={{
                    transform: "skewY(-1deg)",
                    transformOrigin: "right center",
                  }}
                />

                {/* Cover frame */}
                <div className="group relative overflow-hidden rounded-r-[5px] rounded-l-[2px] border border-white/15 bg-[#171117] p-[3px] shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                  <img
                    src={frontCover}
                    alt="Front cover of জুলাইয়ের রক্তিম সকাল"
                    loading="lazy"
                    className="relative z-0 block aspect-[2/3] w-full rounded-r-[3px] rounded-l-[1px] object-cover"
                  />

                  {/* Preserve cover readability while adding subtle finish */}
                  <div className="pointer-events-none absolute inset-[3px] z-10 bg-gradient-to-br from-white/[0.10] via-transparent to-black/[0.12]" />

                  {/* Gentle reflective sheen */}
                  <div className="pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.10] to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                </div>

                {/* Ground shadow */}
                <div className="pointer-events-none absolute -bottom-8 left-[10%] right-[5%] h-5 rounded-full bg-black/50 blur-xl" />
              </motion.div>

              {/* Floating detail — intentionally understated */}
              {/* <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute right-0 top-[35%] hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#10131d]/80 px-3.5 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:flex"
              >
                <div className="flex size-9 items-center justify-center rounded-xl border border-red-300/15 bg-red-400/[0.08] text-red-200">
                  <BookOpen size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">My First Book</p>
                  <p className="mt-1 text-[10px] text-white/45">A story from experience</p>
                </div>
              </motion.div> */}

              {/* Bottom caption */}
              <div className="relative mt-12 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                  A Story Worth Remembering
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
              </div>
            </div>


            {/* Book identity card */}
            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-red-300/15 bg-red-400/[0.08] text-red-200">
                  <Feather size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    My First Book
                  </p>
                  <p className="mt-1 text-xs leading-5 text-text-muted sm:text-sm">
                    A personal account of memory, courage, and a generation's story.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT: BOOK STORY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mx-auto w-full max-w-xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-red-300/70" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-200 sm:text-xs">
                Words From Experience
              </p>
            </div>

            {/* Main heading */}
            {/* <h2 className="mt-5 max-w-lg text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl xl:text-[2.75rem]">
              Some stories are too important to be{" "}
              <span className="bg-gradient-to-r from-red-200 via-orange-200 to-amber-100 bg-clip-text text-transparent">
                forgotten.
              </span>
            </h2> */}

            {/* Book title */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                জুলাইয়ের রক্তিম সকাল
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-violet-200/90 sm:text-[15px]">
                A Generation's History — A Witness's Account of Bangladesh's July 2024 Uprising
              </p>
            </div>

            {/* Book details */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs text-white/70">
                122 Pages
              </span>

              <span className="rounded-full border border-red-300/20 bg-red-400/[0.06] px-3.5 py-2 text-xs text-red-200">
                Personal Testimony
              </span>
            </div>

            {/* Story description */}
            <div className="mt-6 space-y-4 text-sm leading-7 text-text-muted sm:text-base sm:leading-7">
              <p>
                Every writer has a beginning.{" "}
                <span className="font-medium text-white">This is mine.</span>{" "}
                My first book grew from my memories and firsthand experiences of
                Bangladesh's July 2024 uprising.
              </p>

              <p>
                Through the days I witnessed in Mirpur and the reflections that
                stayed with me, I wanted to preserve the struggles, courage, and
                sacrifices of a generation that stood for justice, dignity, and
                freedom of expression.
              </p>

              <p>
                These pages are not the final word on history. They are my personal
                testimony—a contribution to remembering what people experienced
                and what future generations deserve to understand.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href="#book-reader"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
              >
                <BookOpen size={18} />
                Explore the Pages
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <p className="flex items-start gap-2 text-xs leading-6 text-text-muted">
                <Heart size={14} className="mt-1 shrink-0 text-red-300/70" />
                Shared in the hope that these memories will live on.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Diveider */}
        <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-4 text-center sm:mt-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <BookOpen size={21} className="text-violet-300" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>
      </section>


      

      {/* ONLINE BOOK READER */}
      <BookReader />

      {/* READER GALLERY */}
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[5%] top-[15%] size-64 rounded-full bg-violet-500/[0.07] blur-[100px]" />
          <div className="absolute bottom-[5%] right-[5%] size-64 rounded-full bg-cyan-500/[0.05] blur-[100px]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Section heading */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.7fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Beyond the Pages
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                Stories Worth Sharing
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:justify-self-end">
          <p className="text-sm leading-7 text-text-muted sm:text-base">
            Every book carries a story, a memory, and a piece of my journey as a writer.
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs font-medium text-white/50">
            <Heart size={14} className="shrink-0 text-violet-300" />
            <span>Every story deserves to be shared.</span>
          </div>
        </div>
        </div>

        {/* Photo gallery */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {readerPhotos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div className="pointer-events-none absolute -inset-px rounded-[22px] bg-gradient-to-br from-violet-400/20 via-white/[0.04] to-cyan-300/15 opacity-50 blur-sm transition duration-500 group-hover:opacity-100" />

              {/* Photo card */}
              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#10131d] p-1.5 shadow-xl shadow-black/20 transition-colors duration-500 group-hover:border-white/20">
                <div className="relative aspect-[2/3] overflow-hidden rounded-[15px] bg-gradient-to-br from-violet-500/10 via-white/[0.02] to-red-500/10">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Fallback behind the image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-violet-200">
                      <Heart size={23} />
                    </div>

                    <p className="max-w-xs text-sm leading-6 text-text-muted">
                      Add your real book-gifting photo here.
                    </p>
                  </div>

                  {/* Image contrast overlay */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/10 to-black/5 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top corner marker */}
                  <div className="absolute right-4 top-4 z-30 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/80 backdrop-blur-md transition duration-300 group-hover:border-violet-200/40 group-hover:text-violet-200">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* Caption */}
                  <figcaption className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6">
                    <div className="mb-3 h-px w-8 bg-gradient-to-r from-violet-300 to-cyan-200 transition-all duration-500 group-hover:w-14" />

                    <p className="text-sm font-semibold leading-6 text-white sm:text-base">
                      {photo.caption}
                    </p>

                    <p className="mt-1.5 text-xs text-white/55">
                      A moment from my writing journey
                    </p>
                  </figcaption>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
        
        {/* Diveider */}
        <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-4 text-center sm:mt-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <BookOpen size={21} className="text-violet-300" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>
      </section>


      {/* A NOTE FROM THE AUTHOR */}
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-violet-500/[0.08] blur-3xl" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-violet-300 sm:text-sm">
              A Note from the Author
            </p>

            <blockquote className="mt-6 max-w-5xl font-['Hind_Siliguri'] text-lg font-normal leading-[2] text-white/90 sm:text-2xl sm:leading-[2] lg:text-[27px]">
              " মাঝে মাঝে মনে হয়, সব কোলাহল, স্ক্রিনের আলো আর পৃথিবীর
              অবিরাম ব্যস্ততা পেছনে ফেলে, বরফে ঢাকা কোনো পাহাড়ে ছোট্ট
              একটা তাঁবু খাটিয়ে যদি কয়েকটা দিন একা থাকতে পারতাম!
              চারপাশে শুধু নীরবতা, মাথার ওপর আকাশ, আর নিজের সঙ্গে
              নিজের কিছু কথা। হয়তো তখন শব্দেরা আরও গভীর হতো,
              অনুভূতিগুলো আরও স্পষ্ট হতো, আর আমি হয়ে উঠতে পারতাম
              আরও ভালো একজন লেখক। কিন্তু জীবন তো সব ইচ্ছের জন্য
              নির্জন কোনো পাহাড় রেখে দেয় না। তাই কোলাহলের মাঝেই
              নীরবতা খুঁজি, আর অসম্ভব সেই নির্জনতাকে শব্দে ধরে
              রাখার চেষ্টা করি। "
            </blockquote>

            {/* Author signature */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-violet-400" />
              <p className="text-sm font-medium tracking-[0.12em] text-text-muted">
                HIMEL MIR
              </p>
            </div>
          </div>
        </motion.div>
      </section>



      {/* UPCOMING BOOK */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.10] via-[#10131d] to-cyan-500/[0.06] p-6 sm:p-10 lg:p-14">
          {/* Ambient background */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-violet-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* BOOK DETAILS */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                <Feather size={14} />
                Currently Writing
              </p>

              <h2 className="mt-6 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
                সেই দিনে
                <br />
                <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  জোনাকিপোকা কথা বলত
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-text-muted sm:text-base">
                A nostalgic journey through childhood, school days, beloved books,
                and the little moments that made life magical. A story about the
                memories we carry and the light we find even in the darkest times.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm text-text-muted">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300">
                  <FileText size={19} />
                </span>

                <span>
                  <span className="block font-medium text-white">
                    The next chapter
                  </span>
                  <span className="mt-1 block text-xs">
                    In progress · More details coming soon
                  </span>
                </span>
              </div>
            </div>

            {/* ACTUAL BOOK COVER */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
              className="group relative mx-auto w-full max-w-[250px] sm:max-w-[290px]"
            >
              {/* Cover glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-300/20 via-violet-400/10 to-cyan-300/15 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Book shadow */}
              <div className="relative rounded-r-lg rounded-l-sm bg-[#171522] p-1 shadow-2xl shadow-black/50">
                <div className="absolute inset-y-1 left-1 z-10 w-2 bg-gradient-to-r from-black/40 via-white/10 to-transparent" />

                <img
                  src="/images/jonakipoka-cover.png"
                  alt="সেই দিনে জোনাকিপোকা কথা বলত — হিমেল মীর"
                  loading="lazy"
                  className="block aspect-[2/3] w-full rounded-r-md object-cover"
                />
              </div>

              <p className="mt-5 text-center text-xs font-medium tracking-[0.18em] text-white/50">
                THE NEXT BOOK · Inshallah
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.07] via-[#10131d] to-cyan-500/[0.04] px-6 py-8 text-center sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-violet-500/[0.10] blur-3xl" />

          <BookOpen
            size={23}
            strokeWidth={1.5}
            className="mx-auto text-violet-300"
          />

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Thank you for{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">
              reading my story.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-text-muted">
            Every page holds a memory. Thank you for giving my words a place in your world.
          </p>

          <a
            href="#book-reader"
            className="group mt-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-5 py-2.5 text-sm font-medium text-violet-200 transition duration-300 hover:border-violet-300/40 hover:bg-violet-400/[0.14]"
          >
            Start reading for free
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
