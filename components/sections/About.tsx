import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["about"] };

const valueIcons = [
  <>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </>,
  <path key="brand" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  <path key="people" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
];

export default function About({ dict }: Props) {
  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              {dict.badge}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              {dict.title1}{" "}
              <span className="text-blue-700">{dict.title2}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">{dict.p1}</p>
            <p className="text-gray-600 leading-relaxed mb-5">
              {dict.p2Start}{" "}
              <strong className="text-gray-900">{dict.p2Product1}</strong>{" "}
              {dict.p2Mid}{" "}
              <strong className="text-gray-900">{dict.p2Product2}</strong>{" "}
              {dict.p2End}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {dict.p3Start}{" "}
              <strong className="text-gray-900">{dict.p3Strong}</strong>
              {dict.p3End}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all"
              >
                {dict.cta1}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-blue-700 border border-blue-200 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
              >
                {dict.cta2}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {dict.values.map((value, i) => (
              <div
                key={value.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {valueIcons[i]}
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {dict.stats.map((stat) => (
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
