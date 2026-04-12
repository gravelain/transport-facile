import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["loss"] };

const icons = [
  <svg key="clock" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="box" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
  <svg key="chart" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
];

export default function LossSection({ dict }: Props) {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-24 pb-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {dict.badge}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
            {dict.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Situations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 sm:mb-12">
          {dict.situations.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                {icons[i]}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bridge — bande pleine largeur qui fait la jonction avec Services */}
      <div className="mt-12 sm:mt-16 bg-blue-700 px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100 text-sm sm:text-base text-center sm:text-left leading-relaxed">
            {dict.bridgeText}{" "}
            <span className="font-semibold text-white">{dict.bridgeHighlight}</span>.
          </p>
          <a
            href="#services"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-all group"
          >
            {dict.bridgeCta}
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
