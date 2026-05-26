"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
  const { error } = await supabase.auth.signUp({
   email,
   password,
});
 if (error) {
  console.log(error);
  alert(JSON.stringify(error));
} else {
  alert("Registro correcto");
}
  }
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">
          Registro TestoCapital
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-3 rounded-xl bg-zinc-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-500 transition p-3 rounded-xl text-white font-semibold"
        >
          Crear cuenta
        </button>
      </div>
    </main>
  );
}