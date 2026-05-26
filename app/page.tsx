import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      <PublicNavbar />

      <main>

        {/* HERO */}

        <section className="relative min-h-screen flex items-center">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_40%)]" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20">

            <div className="max-w-5xl">

              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                Plataforma financiera moderna
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.92] tracking-tight">

                La nueva generación
                <span className="block text-blue-500">
                  de educación financiera.
                </span>

              </h1>

              <p className="text-zinc-400 text-xl md:text-2xl mt-10 max-w-3xl leading-relaxed">
                Aprende inversión, economía y mercados
                desde una plataforma diseñada para el futuro.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mt-12">

                <Link
                  href="/register"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
                >
                  Empezar gratis
                </Link>

                <Link
                  href="/comunidad"
                  className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition"
                >
                  Explorar comunidad
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="border-t border-white/10 border-b border-white/10 bg-white/[0.02]">

          <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

              <div>
                <p className="text-5xl font-black">
                  +12K
                </p>

                <p className="text-zinc-500 mt-2">
                  Usuarios activos
                </p>
              </div>

              <div>
                <p className="text-5xl font-black">
                  +320
                </p>

                <p className="text-zinc-500 mt-2">
                  Análisis publicados
                </p>
              </div>

              <div>
                <p className="text-5xl font-black">
                  +1M€
                </p>

                <p className="text-zinc-500 mt-2">
                  Capital analizado
                </p>
              </div>

              <div>
                <p className="text-5xl font-black">
                  24/7
                </p>

                <p className="text-zinc-500 mt-2">
                  Comunidad activa
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}

        <section className="py-32">

          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-3xl mb-20">

              <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-6">
                Plataforma
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Todo lo necesario para evolucionar como inversor.
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">

                <div className="text-5xl mb-8">
                  📈
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Mercados
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Análisis de acciones, índices,
                  criptomonedas y macroeconomía.
                </p>

              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">

                <div className="text-5xl mb-8">
                  🧠
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Formación
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Aprende inversión desde cero
                  con contenido premium actualizado.
                </p>

              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">

                <div className="text-5xl mb-8">
                  🚀
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Comunidad
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Comparte estrategias e ideas
                  con miles de inversores modernos.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}