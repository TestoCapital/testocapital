"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/login");
  }

return (
  <>
    <Navbar />

    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold">
        Dashboard TestoCapital
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-zinc-400 mb-2">
            Usuarios
          </h2>

          <p className="text-3xl font-bold">
            124
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-zinc-400 mb-2">
            Suscriptores
          </h2>

          <p className="text-3xl font-bold">
            32
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-zinc-400 mb-2">
            Ingresos
          </h2>

          <p className="text-3xl font-bold">
            €12.450
          </p>
        </div>

      </div>
    </main>
  </>
);
}import Navbar from "../components/Navbar";