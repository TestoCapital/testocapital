export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              TestoCapital
            </h2>

            <p className="text-zinc-400 max-w-sm">
              Plataforma moderna de inversión,
              análisis financiero y comunidad.
            </p>
          </div>

          <div className="flex gap-20">

            <div>
              <h3 className="text-white font-semibold mb-4">
                Plataforma
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>Dashboard</li>
                <li>Comunidad</li>
                <li>Noticias</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">
                Legal
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>Privacidad</li>
                <li>Términos</li>
                <li>Cookies</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}