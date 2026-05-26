import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

export default function ComunidadPage() {
  return (
    <div className="bg-black min-h-screen text-white">

      <PublicNavbar />

      <main className="pt-40">

        <section className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
              Comunidad
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-[0.95]">
              Aprende junto a miles de inversores.
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-2xl leading-relaxed">
              Una comunidad moderna donde compartir ideas,
              análisis y conocimiento financiero.
            </p>

          </div>

        </section>

        <section className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-6">
                📊
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Análisis diarios
              </h3>

              <p className="text-zinc-400">
                Contenido actualizado sobre mercados,
                acciones y economía.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-6">
                🧠
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Aprendizaje colectivo
              </h3>

              <p className="text-zinc-400">
                Aprende con otros usuarios y comparte
                conocimientos financieros.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Crecimiento constante
              </h3>

              <p className="text-zinc-400">
                Mejora tus conocimientos y evoluciona
                como inversor moderno.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}