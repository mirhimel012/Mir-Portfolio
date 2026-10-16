
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-text-primary">
      {/* Shared Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]"
      />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
