import DemoModal from "./DemoModal";

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-white/90 text-sm font-medium">
                Fait pour les agences de transport en Côte d&apos;Ivoire
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6"
            >
              Remplissez vos bus.{" "}
              <span className="text-orange-400">Maîtrisez vos colis.</span>{" "}
              Pilotez vos recettes en temps réel.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
              Vos clients réservent depuis leur téléphone, vos colis sont tracés,
              vos recettes sont visibles en temps réel.{" "}
              <strong className="text-white">
                Opérationnel en 48h, sans frais fixes, à votre image.
              </strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <DemoModal
                triggerLabel="Je veux voir la démo →"
                triggerClassName="inline-flex items-center justify-center bg-orange-500 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/30 cursor-pointer"
              />
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Voir les tarifs
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {[
                "Opérationnel en 48h",
                "0 frais fixe, vous payez sur vos ventes",
                "Plateforme à votre image",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white/75 text-sm"
                >
                  <svg
                    className="w-4 h-4 text-orange-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: App Mockup */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl p-5 w-[320px]">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h8M8 11h5M3 7l1-3h16l1 3M3 7v10a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1V7"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      ResaBus Core
                    </span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    Actif
                  </span>
                </div>

                {/* Route */}
                <div className="bg-blue-50 rounded-xl p-3.5 mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Départ</p>
                      <p className="font-bold text-gray-900">Abidjan</p>
                      <p className="text-xs text-gray-500">08:00</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-orange-500 mx-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-0.5">Arrivée</p>
                      <p className="font-bold text-gray-900">Bouaké</p>
                      <p className="text-xs text-gray-500">13:30</p>
                    </div>
                  </div>
                </div>

                {/* Seats */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Places disponibles</span>
                    <span className="font-medium text-gray-700">24 / 50</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-orange-500 h-1.5 rounded-full"
                      style={{ width: "48%" }}
                    />
                  </div>
                </div>

                {/* QR zone */}
                <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-11 h-11 bg-gray-900 rounded-lg p-1.5 flex-shrink-0">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-full h-full"
                      fill="white"
                    >
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
                      <rect x="13" y="13" width="2" height="2" />
                      <rect x="16" y="13" width="2" height="4" />
                      <rect x="10" y="18" width="4" height="2" />
                      <rect x="16" y="18" width="4" height="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Billet #TF-2024-001
                    </p>
                    <p className="text-xs text-gray-500">
                      Scanner à l&apos;embarquement
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge — commission */}
              <div className="absolute -top-5 -right-5 bg-orange-500 text-white rounded-xl px-4 py-2.5 shadow-xl shadow-orange-900/20">
                <p className="text-xl font-bold leading-none">3%</p>
                <p className="text-xs opacity-90 mt-0.5">Commission / billet</p>
              </div>

              {/* Floating badge — colis */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-3.5 py-3 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Colis réservé
                    </p>
                    <p className="text-xs text-gray-500">Bouaké → Abidjan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-wide">Découvrir</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
