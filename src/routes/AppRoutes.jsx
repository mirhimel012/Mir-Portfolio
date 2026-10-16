
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Book from "../pages/Book/Book";
import Travel from "../pages/Travel/Travel";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/book" element={<Book />} />
          <Route path="/travel" element={<Travel />} />
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <section className="mx-auto max-w-6xl px-5 py-24">
                <p className="text-sm uppercase tracking-widest text-accent">
                  404 / Not Found
                </p>
                <h1 className="mt-4 text-4xl font-bold">
                  Page not found.
                </h1>
                <a
                  href="/"
                  className="mt-6 inline-block text-accent hover:text-violet-300"
                >
                  Back to home →
                </a>
              </section>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
