"use client";

import Link from "next/link";

export default function PublicNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-tight"
        >
          TestoCapital
        </Link>

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="text-zinc-300 hover:text-white transition"
          >
            Inicio
          </Link>

          <Link
            href="/comunidad"
            className="text-zinc-300 hover:text-white transition"
          >
            Comunidad
          </Link>

          <Link
            href="/blog"
            className="text-zinc-300 hover:text-white transition"
          >
            Blog
          </Link>

          <Link
            href="/pricing"
            className="text-zinc-300 hover:text-white transition"
          >
            Pricing
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="text-zinc-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-zinc-200 transition"
          >
            Empezar
          </Link>

        </div>

      </div>

    </header>
  );
}