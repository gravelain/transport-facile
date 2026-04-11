import DemoModal from "./DemoModal";
import RevenueSimulator from "./RevenueSimulator";

const commonFeatures = [
  "Votre agence en ligne en 48h à partir du premier échange",
  "Billet numérique avec QR Code sécurisé à l'embarquement",
  "Tableau de bord de vos recettes, consultable à tout moment",
  "Mises à jour continues, sans interruption ni coût supplémentaire",
  "Wave, Orange Money, MTN MoMo, Mobile Money, carte bancaire",
  "Formation de votre équipe guichet incluse dès le démarrage",
];

const plans = [
  {
    name: "Essentiel",
    positioning: "Pour démarrer",
    tagline: "La billetterie en ligne, sans complication.",
    price: "3%",
    retained: "Vous gardez 97 FCFA sur chaque 100 FCFA vendus en ligne.",
    priceSuffix: "de commission par billet vendu en ligne",
    priceNote: null,
    highlighted: false,
    demoModal: false,
    cta: "Commencer avec Essentiel",
    ctaHref: "#contact",
    badge: null,
    extras: [
      "Vos clients réservent leurs billets en ligne, à toute heure",
      "Vous gérez vos lignes, vos horaires et vos tarifs en autonomie",
      "Votre plateforme à votre image : logo, couleurs, nom de votre agence",
      "Votre client reçoit son billet par email, automatiquement",
      "Assistance par email, réponse sous 24h ouvrées",
    ],
    locked: [
      "Gestion des colis et expéditions en ligne",
      "Notifications SMS pour vos clients",
      "Rapports mensuels de performance",
    ],
  },
  {
    name: "Pro",
    positioning: "Le plus choisi",
    tagline: "Billets, colis, suivi des recettes. Tout en un seul endroit.",
    price: "2,5%",
    retained: "Vous gardez 97,5 FCFA sur chaque 100 FCFA vendus en ligne.",
    priceSuffix: "de commission par billet vendu en ligne",
    priceNote: "La commission la plus basse. La plateforme la plus complète.",
    highlighted: true,
    demoModal: true,
    cta: "Démarrer l'essai gratuit",
    ctaHref: "#contact",
    badge: "30 jours offerts",
    extras: [
      "Vos clients réservent leurs billets en ligne, à toute heure",
      "Réservation de colis en ligne, suivi en temps réel pour l'expéditeur",
      "Contrôle à l'embarquement par QR Code : zéro erreur, zéro fraude",
      "Votre client reçoit son billet et ses alertes par SMS et par email",
      "Tableau de bord et rapports mensuels de vos performances",
      "Votre plateforme à votre image, de A à Z",
      "Assistance prioritaire, réponse sous 4h",
    ],
    locked: [],
  },
  {
    name: "Enterprise",
    positioning: "Sur mesure",
    tagline: "Pour les réseaux qui opèrent à grande échelle.",
    price: "À partir de 1,5%",
    retained: "Plus votre réseau grandit, moins vous payez de commission.",
    priceSuffix: "commission négociée selon votre volume",
    priceNote: null,
    highlighted: false,
    demoModal: false,
    cta: "Obtenir un rendez-vous",
    ctaHref: "#contact",
    badge: null,
    extras: [
      "Accès en avant-première à tous les nouveaux modules",
      "Votre propre infrastructure, isolée et dédiée à votre réseau",
      "Tableaux de bord et rapports construits selon vos besoins",
      "Un chef de projet dédié à votre compte",
      "Assistance disponible 24h/24, 7j/7",
      "Formation de votre équipe réalisée sur site",
      "Contrat de service avec engagement de disponibilité de la plateforme",
    ],
    locked: [],
  },
];

const reassurances = [
  {
    title: "Sans engagement",
    desc: "Changez de plan ou arrêtez quand vous voulez. Sans préavis, sans pénalité.",
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "On gagne uniquement si vous gagnez",
    desc: "Aucun frais fixe. Notre commission ne s'applique que sur les ventes réelles. Zéro vente, zéro coût.",
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Pas sûr du bon plan ?",
    desc: (
      <>
        On vous conseille sans engagement.{" "}
        <a href="#contact" className="text-blue-700 font-semibold hover:underline">
          Décrivez-nous votre agence →
        </a>
      </>
    ),
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
            Pas de frais fixes. Pas de risque.{" "}
            <span className="text-blue-700">On grandit ensemble.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Aucun frais d&apos;installation. Aucun abonnement mensuel. Une commission
            uniquement sur les billets vendus en ligne via votre plateforme.{" "}
            <strong className="text-gray-900">
              Si vous ne vendez pas, vous ne payez rien.
            </strong>
          </p>
        </div>

        {/* Revenue Simulator */}
        <div className="mb-10">
          <RevenueSimulator />
        </div>

        {/* Trial banner */}
        <div className="mb-10 bg-blue-700 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                Testez le plan Pro gratuitement pendant 30 jours.
              </p>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5">
                Aucune information bancaire requise. Vous évaluez la plateforme dans les conditions réelles de votre agence, et vous décidez librement à l&apos;issue des 30 jours.
              </p>
            </div>
          </div>
          <DemoModal
            triggerLabel="Démarrer l'essai gratuit →"
            triggerClassName="whitespace-nowrap flex-shrink-0 inline-flex items-center justify-center bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-all cursor-pointer"
          />
        </div>

        {/* Common base */}
        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-6 mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Ce que vous obtenez dès le premier jour, quel que soit votre plan
              </p>
              <p className="text-sm text-gray-500">
                Ces fonctionnalités sont incluses pour tous, sans exception.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
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
                    ? "bg-blue-700 shadow-2xl shadow-blue-900/25 ring-2 ring-blue-500 mt-6 md:mt-0 md:-translate-y-3"
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

                  {/* Positioning + Name */}
                  <div className="mb-5">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                      plan.highlighted ? "text-orange-300" : isEnterprise ? "text-blue-400" : "text-blue-600"
                    }`}>
                      {plan.positioning}
                    </p>
                    <p className={`text-xl font-extrabold leading-tight mb-1.5 ${
                      plan.highlighted || isEnterprise ? "text-white" : "text-gray-900"
                    }`}>
                      {plan.name}
                    </p>
                    <p className={`text-sm leading-snug ${
                      plan.highlighted || isEnterprise ? "text-white/90" : "text-gray-500"
                    }`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price block */}
                  <div className={`rounded-xl px-4 py-4 mb-5 ${
                    plan.highlighted
                      ? "bg-blue-800/60"
                      : isEnterprise
                        ? "bg-white/10"
                        : "bg-gray-50 border border-gray-100"
                  }`}>
                    <p className={`text-3xl sm:text-4xl font-extrabold leading-none ${
                      plan.highlighted || isEnterprise ? "text-white" : "text-gray-900"
                    }`}>
                      {plan.price}
                    </p>
                    <p className={`text-xs mt-1.5 ${
                      plan.highlighted ? "text-blue-200" : isEnterprise ? "text-blue-300" : "text-gray-500"
                    }`}>
                      {plan.priceSuffix}
                    </p>

                    {/* Retained framing — key sales line */}
                    <div className={`mt-3 pt-3 border-t ${
                      plan.highlighted ? "border-blue-600" : isEnterprise ? "border-white/20" : "border-gray-200"
                    }`}>
                      <p className={`text-sm font-bold leading-snug ${
                        plan.highlighted ? "text-orange-300" : isEnterprise ? "text-white" : "text-blue-700"
                      }`}>
                        {plan.retained}
                      </p>
                      {plan.priceNote && (
                        <p className={`text-xs mt-1.5 leading-snug ${
                          plan.highlighted ? "text-blue-200" : isEnterprise ? "text-blue-300" : "text-gray-500"
                        }`}>
                          {plan.priceNote}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="flex-1 mb-6">
                    <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                      plan.highlighted ? "text-white/70" : isEnterprise ? "text-blue-300" : "text-gray-400"
                    }`}>
                      Ce que vous obtenez en plus
                    </p>
                    <ul className="space-y-3">
                      {plan.extras.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? "text-orange-400" : isEnterprise ? "text-blue-400" : "text-blue-600"
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm leading-relaxed ${
                            plan.highlighted ? "text-white" : isEnterprise ? "text-blue-100" : "text-gray-700"
                          }`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.locked.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                        <p className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-2.5">
                          Non inclus dans ce plan
                        </p>
                        <ul className="space-y-2">
                          {plan.locked.map((f) => (
                            <li key={f} className="flex items-start gap-2.5">
                              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-sm text-gray-400">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
            <div key={item.title} className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-start gap-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
