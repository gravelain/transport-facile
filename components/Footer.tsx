import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "ResaBus Core", href: "#services" },
    { label: "ResaBus Colis Core", href: "#services" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Nos tarifs", href: "#tarifs" },
  ],
  Entreprise: [
    { label: "À propos", href: "#a-propos" },
    { label: "FAQ", href: "#faq" },
    { label: "Demander une démo", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGU", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h8M8 11h5M3 7l1-3h16l1 3M3 7v10a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1V7M7 17h.01M17 17h.01"
                  />
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-bold text-white">Transport</span>
                <span className="font-bold text-orange-500"> Facile</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Nous équipons les agences de transport ivoiriennes pour
              qu&apos;elles vendent plus, gèrent mieux leurs colis, et pilotent
              leurs recettes en temps réel.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-gray-500">
                Basé à Abidjan, Côte d&apos;Ivoire
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Transport Facile. Tous droits réservés.
          </p>
          <p>
            Fait avec passion en{" "}
            <span className="text-orange-400">Côte d&apos;Ivoire</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
