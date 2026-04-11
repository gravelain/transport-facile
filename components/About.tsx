const values = [
  {
    title: "Une technologie taillée pour votre marché",
    description:
      "Nos outils sont pensés pour les réalités du transport ivoirien : les départs matinaux, les lignes Abidjan-Bouaké, les clients qui paient via Mobile Money ou Wave, les colis urgents. Pas une solution importée qui ne comprend pas votre terrain.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Votre image. Votre marque. Votre plateforme.",
    description:
      "Chaque agence partenaire obtient sa propre plateforme : son nom, ses couleurs, ses tarifs, ses lignes. Vos clients ne voient pas Transport Facile. Ils voient votre agence, modernisée et professionnelle. La technologie est la nôtre. La plateforme est la vôtre.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Une relation dans la durée, pas juste un contrat",
    description:
      "On ne vous livre pas un outil et on disparaît. Votre succès, c'est notre succès. On suit vos performances, on met à jour votre plateforme, on est disponibles quand vous avez besoin d'aide, et on développe sans cesse de nouveaux modules pour votre agence.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "0 FCFA", label: "de frais fixes" },
  { value: "48h", label: "pour démarrer" },
  { value: "100%", label: "à votre image" },
];

export default function About() {
  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              À propos
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Nous connaissons votre secteur.{" "}
              <span className="text-blue-700">
                Nous avons construit les outils qu&apos;il mérite.
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Transport Facile est né d&apos;un constat simple : le transport
              interurbain ivoirien brasse des millions chaque jour, et pourtant,
              la plupart des agences fonctionnent encore avec un carnet, un stylo,
              et beaucoup de bonne volonté.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Notre réponse : des outils numériques puissants développés
              entièrement en interne :{" "}
              <strong className="text-gray-900">ResaBus Core</strong> pour la
              billetterie et{" "}
              <strong className="text-gray-900">ResaBus Colis Core</strong> pour
              les expéditions, déployés et personnalisés pour chaque agence
              partenaire. Et d&apos;autres modules arrivent.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous ne vendons pas une application générique. Nous construisons{" "}
              <strong className="text-gray-900">votre plateforme</strong>, avec
              vos couleurs, vos règles, votre identité. Ce que vos clients
              verront, c&apos;est votre agence, modernisée.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all"
              >
                Devenir partenaire
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
              >
                Voir nos solutions
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50 rounded-xl p-3 sm:p-4 text-center"
                >
                  <p className="text-lg sm:text-xl font-bold text-blue-700 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
