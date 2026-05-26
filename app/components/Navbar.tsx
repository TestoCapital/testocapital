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
    <header className="w-full border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div>
          <h1 className="text-white text-2xl font-bold">
            TestoCapital
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="bg-zinc-800 hover:bg-zinc-700 transition text-white px-4 py-2 rounded-xl"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}