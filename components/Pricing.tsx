import DemoModal from "./DemoModal";

const commonFeatures = [
  "Mise en ligne de votre agence en 48h",
  "Billet numérique + QR Code sécurisé à l'embarquement",
  "Dashboard de vos recettes, consultable à tout moment",
  "Mises à jour automatiques et continues de la plateforme",
  "Paiement Mobile Money, Wave, Orange Money, carte bancaire",
  "Formation initiale de votre équipe incluse",
];

const plans = [
  {
    name: "Essentiel",
    tagline: "Votre agence en ligne, à votre image.",
    price: "3%",
    priceSuffix: "par billet vendu en ligne",
    priceNote: null,
    highlighted: false,
    demoModal: false,
    cta: "Je démarre",
    ctaHref: "#contact",
    badge: null,
    extras: [
      "Vente de billets en ligne — ResaBus Core",
      "Gestion de vos lignes, horaires et tarifs",
      "Plateforme déployée aux couleurs de votre agence",
      "Confirmations email automatiques pour vos clients",
      "Assistance par email (réponse sous 24h)",
    ],
    locked: [
      "Service colis ResaBus Colis Core",
      "Notifications SMS",
      "Rapports mensuels de performance",
    ],
  },
  {
    name: "Pro",
    tagline: "Billets, colis, analytics. Tout ce qu'il faut pour aller loin.",
    price: "2,5%",
    priceSuffix: "par billet vendu en ligne",
    priceNote: "La commission la plus basse — la plateforme la plus complète.",
    highlighted: true,
    demoModal: true,
    cta: "Essai gratuit 30 jours",
    ctaHref: "#contact",
    badge: "Le plus choisi",
    extras: [
      "Vente de billets en ligne — ResaBus Core",
      "Gestion des colis — ResaBus Colis Core",
      "QR Code billets + QR Code colis",
      "SMS + email automatiques pour vos clients",
      "Statistiques de ventes et rapports mensuels",
      "Plateforme 100% à vos couleurs et votre logo",
      "Assistance prioritaire — réponse rapide garantie",
    ],
    locked: [],
  },
  {
    name: "Enterprise",
    tagline: "Pour les grands opérateurs. Une solution sur mesure, de A à Z.",
    price: "À partir de 1,5%",
    priceSuffix: "selon votre volume de ventes",
    priceNote: "Tarif sur mesure — votre commission baisse à mesure que votre réseau grandit.",
    highlighted: false,
    demoModal: false,
    cta: "Parlons-en",
    ctaHref: "#contact",
    badge: null,
    extras: [
      "Tous les modules ResaBus + nouveautés en avant-première",
      "Interface et base de données 100% dédiées",
      "Tableaux de bord et rapports sur mesure",
      "Chef de projet dédié à votre compte",
      "Assistance 24h/24 – 7j/7",
      "Formation de votre équipe sur site",
      "Garantie de disponibilité (SLA contractuel)",
    ],
    locked: [],
  },
];

const reassurances = [
  {
    title: "Aucun engagement",
    desc: "Changez de plan ou arrêtez à tout moment. Sans pénalité.",
    icon: (
      <svg
        className="w-5 h-5 text-blue-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Plus vous grandissez, moins vous payez",
    desc: "En montant de plan, votre commission baisse. Votre croissance vous récompense.",
    icon: (
      <svg
        className="w-5 h-5 text-blue-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Pas sûr du bon plan ?",
    desc: (
      <>
        On vous conseille sans engagement.{" "}
        <a
          href="#contact"
          className="text-blue-700 font-semibold hover:underline"
        >
          Parlez-nous de votre agence →
        </a>
      </>
    ),
    icon: (
      <svg
        className="w-5 h-5 text-blue-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Tarifs
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Vous payez sur ce que vous vendez.{" "}
            <span className="text-blue-700">Jamais à l&apos;avance.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Pas de frais d&apos;installation. Pas d&apos;abonnement mensuel. Une
            commission uniquement sur les billets vendus en ligne.{" "}
            <strong className="text-gray-900">
              Si vous ne vendez pas, vous ne payez rien.
            </strong>
          </p>
        </div>

        {/* Lancement entry — soft, non-intrusive */}
        <div className="mb-10 bg-white border border-dashed border-blue-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">
                Vous préférez tester avant de vous engager ?
              </p>
              <p className="text-gray-500 text-xs mt-0.5">
                Notre plan{" "}
                <strong className="text-gray-700">Lancement à 5%</strong> vous
                donne accès à ResaBus Core sans aucun engagement. Vous vendez,
                vous constatez, vous décidez ensuite.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap text-sm font-semibold text-blue-700 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all flex-shrink-0"
          >
            En savoir plus
          </a>
        </div>

        {/* Common base */}
        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-6 mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Inclus dans tous les plans, sans exception
              </p>
              <p className="text-sm text-gray-500">
                Peu importe ce que vous choisissez, vous bénéficiez de cette
                base dès le premier jour.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 main plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const isEnterprise = plan.name === "Enterprise";
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col transition-all ${
                  plan.highlighted
                    ? "bg-blue-700 shadow-2xl shadow-blue-900/25 ring-2 ring-blue-500 md:-translate-y-3"
                    : isEnterprise
                      ? "bg-blue-950 shadow-lg"
                      : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Name + tagline */}
                  <div className="mb-5">
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${
                        plan.highlighted
                          ? "text-orange-300"
                          : isEnterprise
                            ? "text-blue-400"
                            : "text-blue-600"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <p
                      className={`text-sm leading-snug ${
                        plan.highlighted || isEnterprise
                          ? "text-white/75"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price block */}
                  <div
                    className={`rounded-xl px-5 py-4 mb-6 ${
                      plan.highlighted
                        ? "bg-blue-800/50"
                        : isEnterprise
                          ? "bg-white/5"
                          : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <p
                      className={`text-4xl font-extrabold leading-none mb-1 ${
                        plan.highlighted || isEnterprise
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        plan.highlighted
                          ? "text-blue-200"
                          : isEnterprise
                            ? "text-blue-300"
                            : "text-gray-500"
                      }`}
                    >
                      {plan.priceSuffix}
                    </p>
                    {plan.priceNote && (
                      <p
                        className={`text-xs mt-2.5 font-medium leading-snug ${
                          plan.highlighted
                            ? "text-orange-300"
                            : isEnterprise
                              ? "text-blue-300"
                              : "text-blue-600"
                        }`}
                      >
                        {plan.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Extras */}
                  <div className="flex-1 mb-6">
                    <p
                      className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                        plan.highlighted || isEnterprise
                          ? "text-white/40"
                          : "text-gray-400"
                      }`}
                    >
                      En plus de la base commune
                    </p>
                    <ul className="space-y-2.5">
                      {plan.extras.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <svg
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              plan.highlighted
                                ? "text-orange-400"
                                : isEnterprise
                                  ? "text-blue-400"
                                  : "text-blue-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span
                            className={`text-sm leading-relaxed ${
                              plan.highlighted
                                ? "text-blue-100"
                                : isEnterprise
                                  ? "text-blue-100"
                                  : "text-gray-700"
                            }`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.locked.length > 0 && (
                      <ul className="space-y-2 mt-4 pt-4 border-t border-dashed border-gray-100">
                        {plan.locked.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                            <span className="text-sm text-gray-300 line-through">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* CTA */}
                  {plan.demoModal ? (
                    <DemoModal
                      triggerLabel={plan.cta}
                      triggerClassName="w-full block text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/30 cursor-pointer transition-all"
                    />
                  ) : (
                    <a
                      href={plan.ctaHref}
                      className={`block text-center py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                        isEnterprise
                          ? "bg-white text-blue-950 hover:bg-blue-50"
                          : "bg-blue-700 text-white hover:bg-blue-800"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reassurances.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-start gap-3"
            >
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
