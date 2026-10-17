
from pathlib import Path
import fitz
from PIL import Image

# PDF file in the project root
PDF_PATH = Path(__file__).parent / "julayer-roktim-shokal.pdf"

# Converted images go inside public
OUTPUT_DIR = (
    Path(__file__).parent
    / "public"
    / "books"
    / "july-pages"
)

# Image settings
DPI = 140
MAX_WIDTH = 1100
WEBP_QUALITY = 82


def main():
    if not PDF_PATH.exists():
        print(f"ERROR: PDF not found: {PDF_PATH}")
        print("Place julayer-roktim-shokal.pdf beside convert_book.py.")
        return

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    document = fitz.open(PDF_PATH)

    try:
        total_pages = len(document)
        print(f"Converting {total_pages} pages...")

        for index, page in enumerate(document, start=1):
            pixmap = page.get_pixmap(
                matrix=fitz.Matrix(DPI / 72, DPI / 72),
                alpha=False,
            )

            image = Image.frombytes(
                "RGB",
                (pixmap.width, pixmap.height),
                pixmap.samples,
            )

            if image.width > MAX_WIDTH:
                new_height = round(
                    image.height * MAX_WIDTH / image.width
                )
                image = image.resize(
                    (MAX_WIDTH, new_height),
                    Image.Resampling.LANCZOS,
                )

            output_file = OUTPUT_DIR / f"page-{index:03}.webp"

            image.save(
                output_file,
                "WEBP",
                quality=WEBP_QUALITY,
                method=6,
            )

            print(f"[{index}/{total_pages}] {output_file.name}")

        print("\nSUCCESS! Your pages are ready.")
        print(f"Output folder: {OUTPUT_DIR}")

    finally:
        document.close()


if __name__ == "__main__":
    main()
