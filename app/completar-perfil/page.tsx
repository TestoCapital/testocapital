"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CompletarPerfilPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");

  async function guardarPerfil() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("No hay usuario");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        nombre,
        apellidos,
        telefono,
      })
      .eq("id", user.id);

    if (error) {
      alert(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">
          Completa tu perfil
        </h1>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full mb-4 p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Apellidos"
          className="w-full mb-4 p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setApellidos(e.target.value)}
        />

        <input
          type="text"
          placeholder="Teléfono"
          className="w-full mb-4 p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button
          onClick={guardarPerfil}
          className="w-full bg-blue-600 hover:bg-blue-500 transition p-3 rounded-xl text-white font-semibold"
        >
          Guardar perfil
        </button>
      </div>
    </main>
  );
}import { useRouter } from "next/navigation";