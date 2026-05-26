"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PortfolioChart from "../components/PortfolioChart";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (
        !profile?.nombre ||
        !profile?.apellidos ||
        !profile?.telefono
      ) {
        router.push("/completar-perfil");
        return;
      }

      setLoading(false);
    }

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        Cargando...
      </main>
    );
  }

return (
  <div className="flex bg-black min-h-screen">

    <Sidebar />

    <div className="flex-1">

      <Navbar />

      <main className="text-white p-10">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-zinc-400 mt-2">
              Bienvenido a TestoCapital
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            TC
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">
              Usuarios
            </p>

            <h2 className="text-4xl font-bold">
              124
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">
              Suscriptores
            </p>

            <h2 className="text-4xl font-bold">
              32
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">
              Ingresos
            </p>

            <h2 className="text-4xl font-bold">
              €12.450
            </h2>
          </div>
          <div className="mt-8">
  <PortfolioChart />
</div>

        </div>

      </main>

    </div>

  </div>
);
}