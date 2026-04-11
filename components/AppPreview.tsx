const bookings = [
  { name: "Kouassi A.", route: "ABJ → BKÉ", time: "08:00", status: "Confirmé", color: "green" },
  { name: "Traoré M.", route: "ABJ → YAM", time: "10:30", status: "Confirmé", color: "green" },
  { name: "Diabaté K.", route: "ABJ → BKÉ", time: "13:00", status: "En attente", color: "yellow" },
  { name: "Ouattara F.", route: "ABJ → MAN", time: "14:00", status: "Confirmé", color: "green" },
];

const kpis = [
  { label: "Billets vendus", value: "47", unit: "", trend: "+12%", up: true },
  { label: "Recettes du jour", value: "258 500", unit: "FCFA", trend: "+8%", up: true },
  { label: "Taux de remplissage", value: "84%", unit: "", trend: "+5%", up: true },
];

export default function AppPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            La plateforme en images
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Simple pour vos clients.{" "}
            <span className="text-blue-700">Puissant pour votre agence.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Voici exactement à quoi ressemble ResaBus, côté voyageur sur
            mobile, et côté direction sur le tableau de bord.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left : Mobile — vue client ── */}
          <div className="flex flex-col items-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Vue client · Sur mobile
            </p>

            {/* Phone shell */}
            <div className="relative w-[260px] sm:w-[280px]">
              <div className="bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl shadow-gray-900/40">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">

                  {/* Status bar + header */}
                  <div className="bg-gradient-to-b from-blue-800 to-blue-700 px-5 pt-5 pb-7">
                    {/* Notch */}
                    <div className="w-20 h-5 bg-gray-900 rounded-full mx-auto mb-5" />
                    <p className="text-blue-200 text-xs text-center mb-1">
                      Réservation de billet
                    </p>
                    <h3 className="text-white font-bold text-base text-center">
                      Choisissez votre trajet
                    </h3>
                  </div>

                  {/* Screen content */}
                  <div className="px-4 py-4 space-y-3">

                    {/* Selected route */}
                    <div className="border-2 border-blue-600 rounded-xl p-3.5 bg-blue-50">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-xs text-gray-400">Départ</p>
                          <p className="font-bold text-gray-900 text-sm">Abidjan</p>
                          <p className="text-xs text-gray-500">08h00</p>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 px-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <div className="w-10 h-px bg-gradient-to-r from-blue-600 to-orange-500" />
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                          </div>
                          <p className="text-xs text-gray-400">5h30</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Arrivée</p>
                          <p className="font-bold text-gray-900 text-sm">Bouaké</p>
                          <p className="text-xs text-gray-500">13h30</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-blue-200">
                        <span className="text-xs text-gray-500">14 places restantes</span>
                        <span className="font-bold text-blue-700 text-sm">5 500 FCFA</span>
                      </div>
                    </div>

                    {/* Another route (dimmed) */}
                    <div className="border border-gray-200 rounded-xl p-3 opacity-60">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400">Abidjan</p>
                          <p className="font-semibold text-gray-700 text-xs">10h00</p>
                        </div>
                        <div className="text-xs text-gray-400">→</div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Yamoussoukro</p>
                          <p className="font-semibold text-gray-700 text-xs">12h30</p>
                        </div>
                        <span className="text-xs font-bold text-gray-700">4 000 FCFA</span>
                      </div>
                    </div>

                    {/* Seats bar */}
                    <div className="bg-gray-50 rounded-xl px-3 py-2.5 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Siège sélectionné</span>
                      <span className="text-xs font-bold text-orange-500">14A ✓</span>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-sm">
                      Payer et recevoir mon billet →
                    </button>

                    {/* Payment logos */}
                    <div className="flex gap-1.5 justify-center flex-wrap pb-1">
                      {["Wave", "Orange Money", "MTN MoMo", "Carte"].map((p) => (
                        <span
                          key={p}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="pb-3 flex justify-center">
                    <div className="w-24 h-1 bg-gray-300 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating QR badge - masqué sous sm pour éviter le débordement sur petits écrans */}
              <div className="hidden sm:block absolute -right-12 top-16 bg-white rounded-xl shadow-xl border border-gray-100 px-3 py-2.5 w-32">
                <p className="text-xs font-semibold text-gray-900 mb-1.5">Billet reçu</p>
                <div className="w-10 h-10 bg-gray-900 rounded-lg p-1 mx-auto">
                  <svg viewBox="0 0 20 20" className="w-full h-full" fill="white">
                    <rect x="0" y="0" width="8" height="8" rx="1" />
                    <rect x="2" y="2" width="4" height="4" fill="#111827" />
                    <rect x="12" y="0" width="8" height="8" rx="1" />
                    <rect x="14" y="2" width="4" height="4" fill="#111827" />
                    <rect x="0" y="12" width="8" height="8" rx="1" />
                    <rect x="2" y="14" width="4" height="4" fill="#111827" />
                    <rect x="10" y="10" width="2" height="2" />
                    <rect x="13" y="10" width="2" height="2" />
                    <rect x="16" y="10" width="4" height="2" />
                    <rect x="10" y="13" width="2" height="4" />
                    <rect x="16" y="13" width="2" height="4" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">Scanner en gare</p>
              </div>
            </div>

            <p className="mt-10 text-sm text-gray-500 text-center max-w-xs">
              Le client réserve depuis son téléphone, paie avec Wave ou Orange
              Money, et reçoit son QR Code immédiatement.
            </p>
          </div>

          {/* ── Right : Dashboard — vue agence ── */}
          <div className="flex flex-col items-center w-full">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Vue agence · Tableau de bord
            </p>

            {/* Browser shell */}
            <div className="w-full bg-gray-900 rounded-2xl shadow-2xl shadow-gray-900/40 p-2">

              {/* Browser bar */}
              <div className="bg-gray-800 rounded-xl px-3 py-2 flex items-center gap-3 mb-2">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 bg-gray-700 rounded-lg px-3 py-1 text-xs text-gray-400 text-center truncate">
                  dashboard.resabus.com · Agence Express CI
                </div>
              </div>

              {/* Dashboard */}
              <div className="bg-white rounded-xl p-4">

                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Bonjour, Direction 👋</p>
                    <p className="font-bold text-gray-900 text-sm">
                      Tableau de bord · Aujourd&apos;hui
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    ● En ligne
                  </span>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {kpis.map((k) => (
                    <div key={k.label} className="bg-blue-50 rounded-xl p-2.5">
                      <p className="text-xs text-gray-500 leading-tight mb-1">{k.label}</p>
                      <p className="font-extrabold text-gray-900 text-sm leading-none">
                        {k.value}
                        {k.unit && (
                          <span className="text-xs font-normal text-gray-500 ml-0.5">
                            {k.unit}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-green-600 font-semibold mt-1">
                        ↑ {k.trend}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini chart bar */}
                <div className="mb-4 bg-gray-50 rounded-xl p-3">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Ventes par départ, cette semaine
                  </p>
                  <div className="flex items-end gap-1.5 h-10">
                    {[60, 75, 45, 90, 80, 95, 84].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md ${i === 6 ? "bg-orange-500" : "bg-blue-200"}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Lun</span>
                    <span>Mar</span>
                    <span>Mer</span>
                    <span>Jeu</span>
                    <span>Ven</span>
                    <span>Sam</span>
                    <span className="text-orange-500 font-semibold">Auj.</span>
                  </div>
                </div>

                {/* Recent bookings */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Dernières réservations
                  </p>
                  <div className="space-y-2">
                    {bookings.map((b) => (
                      <div
                        key={b.name}
                        className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-blue-700">
                              {b.name[0]}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-900 leading-none">
                              {b.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {b.route} · {b.time}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            b.color === "green"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {b.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center max-w-xs">
              Le directeur d&apos;agence suit ses recettes, ses départs et ses
              réservations en temps réel, depuis n&apos;importe où.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-4 text-sm">
            Vous voulez voir votre agence dans ce tableau de bord ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
          >
            Demander une démo personnalisée
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
