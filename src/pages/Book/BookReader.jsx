
import { forwardRef, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Heart,
  Maximize2,
  Minimize2,
  Sparkles,
} from "lucide-react";

const TOTAL_PAGES = 122;

function getPageUrl(page) {
  return `/books/july-pages/page-${String(page).padStart(3, "0")}.webp`;
}

// Each image is a physical-looking page in the flipbook.
const BookPage = forwardRef(function BookPage({ number }, ref) {
  return (
    <div
      ref={ref}
      className="relative h-full w-full overflow-hidden bg-[#f5efe4]"
    >
      <img
        src={getPageUrl(number)}
        alt={`Page ${number} of জুলাইয়ের রক্তিম সকাল`}
        draggable={false}
        className="block h-full w-full select-none object-contain"
      />

      <span className="pointer-events-none absolute bottom-2 left-0 right-0 text-center text-[10px] text-black/50">
        {number}
      </span>
    </div>
  );
});

export default function BookReader() {
  const bookRef = useRef(null);

  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const [focusMode, setFocusMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bookSize, setBookSize] = useState({
    width: 400,
    height: 560,
  });

  const progress = Math.round((page / TOTAL_PAGES) * 100);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    function updateLayout() {
      setIsMobile(media.matches);
      setBookSize(
        media.matches
          ? { width: 290, height: 420 }
          : { width: 400, height: 560 }
      );
    }

    updateLayout();
    media.addEventListener("change", updateLayout);

    return () => media.removeEventListener("change", updateLayout);
  }, []);

  function goToPage(targetPage) {
    const target = Math.max(1, Math.min(TOTAL_PAGES, targetPage));

    setPageInput(String(target));

    const flipbook = bookRef.current?.pageFlip();

    if (flipbook) {
      flipbook.flip(target - 1);
    } else {
      setPage(target);
    }
  }

  function handleFlip(event) {
    const currentPage = event.data + 1;

    setPage(currentPage);
    setPageInput(String(currentPage));
  }

  function nextPage() {
    bookRef.current?.pageFlip()?.flipNext();
  }

  function previousPage() {
    bookRef.current?.pageFlip()?.flipPrev();
  }

  function handlePageSubmit(event) {
    event.preventDefault();

    const target = Number(pageInput);

    if (
      Number.isInteger(target) &&
      target >= 1 &&
      target <= TOTAL_PAGES
    ) {
      goToPage(target);
    } else {
      setPageInput(String(page));
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const tag = event.target?.tagName;

      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        event.target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousPage();
      }

      if (event.key === "Escape") {
        setFocusMode(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="book-reader"
      className={`mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 sm:py-12 ${
        focusMode
          ? "fixed inset-0 z-50 overflow-y-auto bg-[#0c0a0e] px-3 sm:px-8"
          : ""
      }`}
    >
      {!focusMode && (
       
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                The Digital Edition
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Enter the{" "}
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                    story.
                </span>
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-text-muted">
                Turn the pages, explore the memories, and read at your own pace.
                </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2 text-xs text-emerald-200 sm:self-auto">
                <span className="size-2 rounded-full bg-emerald-400" />
                Free online reading
            </div>
            </div>

      )}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151117] shadow-2xl shadow-black/30 sm:rounded-3xl">
        {/* Reader header */}
        <header className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-red-300/15 bg-red-400/[0.08] text-red-200">
              <BookOpen size={21} />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                জুলাইয়ের রক্তিম সকাল
              </h3>
              <p className="mt-1 text-[10px] tracking-[0.14em] text-[#ad9da5] sm:text-xs">
                HIMEL MIR · ONLINE EDITION
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setFocusMode((value) => !value)}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs text-white transition hover:bg-white/10"
          >
            {focusMode ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span className="hidden sm:inline">
              {focusMode ? "Exit focus" : "Focus mode"}
            </span>
          </button>
        </header>

        {/* Reading progress */}
        <div className="px-4 pt-5 sm:px-6">
          <div className="flex items-center justify-between text-xs">
            <span className="tracking-widest text-[#ad9da5]">
              READING PROGRESS
            </span>
            <span className="font-medium text-red-200">{progress}%</span>
          </div>

          <div
            className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Real 3D page flip */}
        <div className="overflow-hidden px-1 py-6 sm:px-4 sm:py-8">
          <div className="mx-auto flex min-h-[440px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#0c0a0e] px-1 py-5 sm:min-h-[600px] sm:rounded-2xl">
            <div className="max-w-full">
              <HTMLFlipBook
                key={`${isMobile ? "mobile" : "desktop"}-${bookSize.width}`}
                ref={bookRef}
                width={bookSize.width}
                height={bookSize.height}
                size="fixed"
                minWidth={290}
                maxWidth={400}
                minHeight={420}
                maxHeight={560}
                showCover={false}
                usePortrait={isMobile}
                startPage={page - 1}
                drawShadow={true}
                flippingTime={850}
                maxShadowOpacity={0.45}
                showPageCorners={true}
                disableFlipByClick={false}
                mobileScrollSupport={true}
                swipeDistance={25}
                clickEventForward={true}
                useMouseEvents={true}
                onFlip={handleFlip}
                className="book-flip"
              >
                {Array.from({ length: TOTAL_PAGES }, (_, index) => (
                  <BookPage key={index + 1} number={index + 1} />
                ))}
              </HTMLFlipBook>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] text-[#ad9da5]">
            Drag a page corner or use the controls to turn the pages.
          </p>
        </div>

        {/* Navigation */}
        <footer className="border-t border-white/[0.08] px-3 py-5 sm:px-6">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-2">
            <button
              type="button"
              onClick={previousPage}
              disabled={page <= 1}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-3 text-xs text-white transition hover:bg-white/[0.06] disabled:opacity-30 sm:px-5 sm:text-sm"
            >
              <ArrowLeft size={16} />
              Previous
            </button>

            <div className="text-center">
              <p className="text-[9px] tracking-widest text-[#ad9da5]">
                CURRENT PAGE
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                {page} <span className="text-[#8c818d]">/ {TOTAL_PAGES}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={nextPage}
              disabled={page >= TOTAL_PAGES}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ead0c6] to-[#f3ddd2] px-3 py-3 text-xs font-semibold text-[#28171a] transition hover:from-white hover:to-white disabled:opacity-30 sm:px-5 sm:text-sm"
            >
              Next page
              <ArrowRight size={16} />
            </button>
          </div>

          <form
            onSubmit={handlePageSubmit}
            className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-2"
          >
            <label
              htmlFor="book-page-number"
              className="whitespace-nowrap text-xs text-[#ad9da5]"
            >
              Jump to page
            </label>

            <input
              id="book-page-number"
              type="number"
              min="1"
              max={TOTAL_PAGES}
              value={pageInput}
              onChange={(event) => setPageInput(event.target.value)}
              className="w-20 rounded-lg border border-white/10 bg-black/30 px-2 py-2 text-center text-sm text-white outline-none focus:border-violet-400/60"
            />

            <button
              type="submit"
              className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white hover:bg-white/10"
            >
              Go
            </button>
          </form>

          <p className="mt-4 text-center text-[10px] text-[#8c818d] sm:text-[11px]">
            Keyboard shortcuts: ← Previous · → Next · Esc Exit focus
          </p>
        </footer>
      </div>

      {!focusMode && (
        <p className="mx-auto mt-4 flex max-w-2xl items-center justify-center gap-2 text-center text-[11px] leading-5 text-text-muted">
          <Heart size={13} className="shrink-0 text-red-300/70" />
          Thank you for reading. These pages are shared to keep the memories
          alive for future generations.
        </p>
      )}
    </section>
  );
}
