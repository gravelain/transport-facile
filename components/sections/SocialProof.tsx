import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["socialProof"] };

export default function SocialProof({ dict }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
            {dict.badge}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-20">
          {dict.testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col hover:bg-white/10 transition-colors"
            >
              {/* Quote mark */}
              <div className="text-4xl font-serif text-blue-500 leading-none mb-4 select-none">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">
                    {t.name} · {t.role}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {t.agency} · {t.lines}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dict.stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-white leading-none">
                {s.value}
              </p>
              <p className="text-sm font-semibold text-gray-200 mt-2">
                {s.label}
              </p>
              <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-5">{dict.bottomText}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/30"
          >
            {dict.bottomCta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
