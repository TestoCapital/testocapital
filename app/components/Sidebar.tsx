"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6 hidden md:block">
      
      <h2 className="text-white text-2xl font-bold mb-10">
        TestoCapital
      </h2>

      <nav className="flex flex-col gap-3">

        <Link
          href="/dashboard"
          className="text-zinc-300 hover:text-white hover:bg-zinc-900 transition p-3 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          href="/perfil"
          className="text-zinc-300 hover:text-white hover:bg-zinc-900 transition p-3 rounded-xl"
        >
          Perfil
        </Link>

        <Link
          href="/comunidad"
          className="text-zinc-300 hover:text-white hover:bg-zinc-900 transition p-3 rounded-xl"
        >
          Comunidad
        </Link>

        <Link
          href="/ajustes"
          className="text-zinc-300 hover:text-white hover:bg-zinc-900 transition p-3 rounded-xl"
        >
          Ajustes
        </Link>

      </nav>
    </aside>
  );
}