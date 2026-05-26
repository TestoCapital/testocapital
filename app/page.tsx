import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-3xl" />

<div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-3xl" />

      <PublicNavbar />

      <main className="pt-40">

        <section className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-zinc-300 mb-8">
              Plataforma moderna de inversión
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight">
              El futuro de la educación financiera.
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-2xl leading-relaxed">
              Aprende inversión, mercados y economía
              desde una plataforma moderna diseñada
              para la nueva generación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition shadow-[0_0_40px_rgba(255,255,255,0.15)]">
  Empezar ahora
</button>

              <button className="border border-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/5 transition">
                Ver comunidad
              </button>

            </div>
            <div className="flex flex-wrap gap-10 mt-16">

  <div>
    <p className="text-4xl font-bold text-white">
      +12K
    </p>

    <p className="text-zinc-500 mt-1">
      Usuarios
    </p>
  </div>

  <div>
    <p className="text-4xl font-bold text-white">
      +2M€
    </p>

    <p className="text-zinc-500 mt-1">
      Capital analizado
    </p>
  </div>

  <div>
    <p className="text-4xl font-bold text-white">
      +350
    </p>

    <p className="text-zinc-500 mt-1">
      Contenidos
    </p>
  </div>

</div>

          </div>

        </section>

        <section className="max-w-7xl mx-auto px-6 mt-40 pb-40">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl hover:border-white/20 transition duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Comunidad
              </h3>

              <p className="text-zinc-400">
                Conecta con inversores y aprende diariamente.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl hover:border-white/20 transition duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Educación
              </h3>

              <p className="text-zinc-400">
                Formación moderna sobre mercados y economía.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-2xl hover:border-white/20 transition duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Tecnología
              </h3>

              <p className="text-zinc-400">
                Plataforma rápida, segura y escalable.
              </p>
            </div>

          </div>

        </section>
        <section className="max-w-7xl mx-auto px-6 py-32">

  <div className="text-center mb-20">

    <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
      Plataforma moderna
    </p>

    <h2 className="text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
      Diseñada para la nueva generación de inversores.
    </h2>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10">
      <div className="text-5xl mb-6">
        📈
      </div>

      <h3 className="text-white text-2xl font-bold mb-4">
        Análisis profesional
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Accede a análisis modernos sobre acciones,
        economía y tendencias financieras globales.
      </p>
    </div>

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10">
      <div className="text-5xl mb-6">
        🌍
      </div>

      <h3 className="text-white text-2xl font-bold mb-4">
        Comunidad global
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Conecta con miles de personas interesadas
        en inversión y crecimiento financiero.
      </p>
    </div>

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10">
      <div className="text-5xl mb-6">
        ⚡
      </div>

      <h3 className="text-white text-2xl font-bold mb-4">
        Tecnología moderna
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Plataforma rápida, segura y optimizada
        para la experiencia del usuario.
      </p>
    </div>

  </div>

</section>
<section className="max-w-7xl mx-auto px-6 py-32">

  <div className="text-center mb-20">

    <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
      Pricing
    </p>

    <h2 className="text-5xl md:text-6xl font-bold text-white">
      Elige tu plan.
    </h2>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10">

      <h3 className="text-white text-3xl font-bold mb-4">
        Free
      </h3>

      <p className="text-zinc-400 mb-8">
        Acceso básico a la plataforma.
      </p>

      <p className="text-5xl font-bold text-white mb-10">
        0€
      </p>

      <ul className="space-y-4 text-zinc-300 mb-10">
        <li>✓ Comunidad básica</li>
        <li>✓ Noticias</li>
        <li>✓ Dashboard</li>
      </ul>

      <button className="w-full border border-white/10 py-4 rounded-2xl text-white hover:bg-white/5 transition">
        Empezar gratis
      </button>

    </div>

    <div className="bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl p-10 relative overflow-hidden">

      <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
        Popular
      </div>

      <h3 className="text-white text-3xl font-bold mb-4">
        Premium
      </h3>

      <p className="text-zinc-300 mb-8">
        Para inversores que quieren ir más lejos.
      </p>

      <p className="text-5xl font-bold text-white mb-10">
        19€
        <span className="text-zinc-400 text-lg">
          /mes
        </span>
      </p>

      <ul className="space-y-4 text-zinc-200 mb-10">
        <li>✓ Comunidad premium</li>
        <li>✓ Análisis exclusivos</li>
        <li>✓ Contenido avanzado</li>
        <li>✓ Alertas y notificaciones</li>
      </ul>

      <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition">
        Probar Premium
      </button>

    </div>

  </div>

</section>
<section className="max-w-5xl mx-auto px-6 py-32">

  <div className="text-center mb-20">

    <h2 className="text-5xl font-bold text-white">
      Preguntas frecuentes
    </h2>

  </div>

  <div className="space-y-6">

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
      <h3 className="text-white text-2xl font-semibold mb-4">
        ¿Qué es TestoCapital?
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Plataforma moderna de inversión, análisis financiero
        y comunidad para personas interesadas en economía.
      </p>
    </div>

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
      <h3 className="text-white text-2xl font-semibold mb-4">
        ¿Puedo usar la plataforma gratis?
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Sí, existe un plan gratuito con acceso básico.
      </p>
    </div>

    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
      <h3 className="text-white text-2xl font-semibold mb-4">
        ¿Habrá aplicación móvil?
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Sí. Próximamente disponible para iOS y Android.
      </p>
    </div>

  </div>

</section>

      </main>

      <Footer />

    </div>
  );
}