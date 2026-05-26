"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PerfilPage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function getProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(data);
    }

    getProfile();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Mi Perfil
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-xl">

        <div className="mb-6">
          <p className="text-zinc-400 mb-1">
            Nombre
          </p>

          <p className="text-xl">
            {profile?.nombre}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-zinc-400 mb-1">
            Apellidos
          </p>

          <p className="text-xl">
            {profile?.apellidos}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 mb-1">
            Teléfono
          </p>

          <p className="text-xl">
            {profile?.telefono}
          </p>
        </div>

      </div>

    </main>
  );
}