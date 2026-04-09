const services = [
  {
    id: "resabus-core",
    badge: "Billets & Voyageurs",
    title: "ResaBus Core",
    subtitle: "Vendez vos billets 24h/24 — même quand votre guichet est fermé",
    description:
      "Fini les clients qui repartent parce que votre guichet était bondé ou fermé. Avec ResaBus Core, vos voyageurs réservent depuis leur téléphone à n'importe quelle heure. Votre équipe scanne le billet à l'embarquement en 5 secondes. Vos recettes, elles, sont centralisées en temps réel.",
    color: "blue" as const,
    features: [
      "Vente de billets en ligne 24h/24, 7j/7 — sans guichetier",
      "Billet numérique envoyé au client en quelques secondes",
      "Scan QR Code rapide à l'embarquement — 0 erreur, 0 fraude",
      "Vos recettes du jour visibles en un coup d'œil",
      "Gestion de vos lignes, horaires et tarifs en toute autonomie",
      "SMS et email de confirmation automatiques pour vos clients",
      "Historique complet — fini les fins de caisse floues",
      "Plateforme déployée aux couleurs de votre agence",
    ],
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      </svg>
    ),
  },
  {
    id: "resabus-colis",
    badge: "Colis & Expéditions",
    title: "ResaBus Colis Core",
    subtitle:
      "Transformez votre service colis en source de revenus maîtrisée",
    description:
      "Vos clients font la queue avec leurs colis, votre équipe jongle entre billets et expéditions, et les recettes colis restent floues en fin de journée. ResaBus Colis Core organise tout : le client réserve son créneau en ligne, vous préparez le départ sereinement, et chaque colis est tracé de l'agence jusqu'au destinataire.",
    color: "orange" as const,
    features: [
      "Réservation de créneaux colis en ligne — fini les files d'attente",
      "Bon de prise en charge numérique avec QR Code",
      "Suivi en temps réel — l'expéditeur sait où est son colis",
      "Tarification flexible selon le poids et la destination",
      "Historique des envois par client — fidélisez votre clientèle",
      "Alertes automatiques à la réception",
      "Tableau de bord dédié pour votre équipe colis",
      "Fonctionne de pair avec ResaBus Core",
    ],
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Nos solutions
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Deux outils qui transforment votre agence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conçus pour le terrain ivoirien. Déployés à votre image. Mis à jour
            en continu.
          </p>
        </div>

        {/* Pain block */}
        <div className="mb-14 bg-blue-50 rounded-2xl px-6 py-7 border border-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Des clients perdus chaque jour",
                text: "Votre guichet est fermé ou bondé — et vos clients partent chez le concurrent, faute de pouvoir réserver à l'avance.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: "Des colis sans traçabilité",
                text: "Les expéditions de colis ne sont pas suivies, les recettes sont difficiles à vérifier, les litiges clients s'accumulent.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Des recettes impossibles à piloter",
                text: "En fin de journée, vous comptez à la main. Impossible de savoir en temps réel ce que votre agence a réellement encaissé.",
              },
            ].map((pain) => (
              <div key={pain.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  {pain.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{pain.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{pain.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-blue-200">
            <p className="text-blue-800 font-semibold text-base text-center">
              Transport Facile règle exactement ces trois problèmes — et ce n&apos;est que le début.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top color bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                  service.color === "blue"
                    ? "bg-gradient-to-r from-blue-600 to-blue-400"
                    : "bg-gradient-to-r from-orange-500 to-orange-400"
                }`}
              />

              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    service.color === "blue"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {service.icon}
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    service.color === "blue"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {service.badge}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p
                className={`text-sm font-medium mb-3 ${
                  service.color === "blue"
                    ? "text-blue-600"
                    : "text-orange-500"
                }`}
              >
                {service.subtitle}
              </p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        service.color === "blue"
                          ? "text-blue-600"
                          : "text-orange-500"
                      }`}
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
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Illustration ResaBus Core */}
              {service.id === "resabus-core" && (
                <div className="mt-7 bg-blue-50 rounded-2xl p-4">
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-blue-700 rounded-md flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-blue-800">Billet numérique</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Confirmé</span>
                  </div>
                  {/* Route */}
                  <div className="bg-white rounded-xl p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Départ</p>
                        <p className="font-bold text-gray-900 text-sm">Abidjan</p>
                        <p className="text-xs text-gray-500">Gare Nord — 08:00</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 px-2">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        </div>
                        <span className="text-xs text-gray-400">5h30</span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 mb-0.5">Arrivée</p>
                        <p className="font-bold text-gray-900 text-sm">Bouaké</p>
                        <p className="text-xs text-gray-500">Gare centrale — 13:30</p>
                      </div>
                    </div>
                  </div>
                  {/* Seat + QR row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Siège</p>
                      <p className="font-bold text-blue-800 text-sm">14A</p>
                      <p className="text-xs text-gray-500">Réf. TF-2025-4821</p>
                    </div>
                    {/* Mini QR */}
                    <div className="w-10 h-10 bg-gray-900 rounded-lg p-1">
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
                        <rect x="10" y="18" width="4" height="2" />
                        <rect x="16" y="18" width="4" height="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Illustration ResaBus Colis Core */}
              {service.id === "resabus-colis" && (
                <div className="mt-7 bg-orange-50 rounded-2xl p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-orange-800">Suivi colis</span>
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">En transit</span>
                  </div>

                  {/* Route */}
                  <div className="bg-white rounded-xl p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Expéditeur</p>
                        <p className="font-bold text-gray-900 text-sm">Adjamé · Abidjan</p>
                      </div>
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 mb-0.5">Destinataire</p>
                        <p className="font-bold text-gray-900 text-sm">Bouaké</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Poids : 4,5 kg</span>
                      <span className="font-semibold text-orange-600">3 000 FCFA</span>
                    </div>
                  </div>

                  {/* Status timeline */}
                  <div className="flex items-center justify-between px-1">
                    {[
                      { label: "Pris en charge", done: true },
                      { label: "En transit", done: true, current: true },
                      { label: "Livré", done: false },
                    ].map((step, i) => (
                      <div key={step.label} className="flex items-center gap-1 flex-1">
                        <div className="flex flex-col items-center gap-1">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${step.done ? "bg-orange-500" : "bg-gray-200"} ${step.current ? "ring-2 ring-orange-300" : ""}`}>
                            {step.done && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-[10px] text-center leading-tight w-14 ${step.done ? "text-orange-700 font-medium" : "text-gray-400"}`}>{step.label}</span>
                        </div>
                        {i < 2 && <div className={`flex-1 h-0.5 mb-4 mx-0.5 ${step.done ? "bg-orange-400" : "bg-gray-200"}`} />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Link */}
              <div className="mt-5">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    service.color === "blue"
                      ? "text-blue-700 hover:text-blue-900"
                      : "text-orange-500 hover:text-orange-700"
                  }`}
                >
                  Je veux en savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap teaser */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            <span className="font-medium text-gray-700">Et ce n&apos;est pas tout.</span>{" "}
            De nouveaux modules arrivent prochainement pour couvrir encore plus
            de besoins de votre agence.{" "}
            <a href="#contact" className="text-blue-700 font-medium hover:underline">
              Restez informé →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
