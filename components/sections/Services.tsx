import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["services"] };

const serviceIcons = [
  <svg key="ticket" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>,
  <svg key="box" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
];

const colors = ["blue", "orange"] as const;

export default function Services({ dict }: Props) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {dict.badge}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {dict.title1}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dict.items.map((service, idx) => {
            const color = colors[idx];
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-gray-100 bg-white p-5 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top color bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    color === "blue"
                      ? "bg-gradient-to-r from-blue-600 to-blue-400"
                      : "bg-gradient-to-r from-orange-500 to-orange-400"
                  }`}
                />

                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      color === "blue"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {serviceIcons[idx]}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      color === "blue"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {service.serviceBadge}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className={`text-sm font-medium mb-3 ${color === "blue" ? "text-blue-600" : "text-orange-500"}`}>
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color === "blue" ? "text-blue-600" : "text-orange-500"}`}
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

                {/* Inline illustration — ticket */}
                {idx === 0 && (
                  <div className="mt-7 bg-blue-50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 bg-blue-700 rounded-md flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-blue-800">{service.mockupBadge}</span>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">{service.mockupStatus}</span>
                    </div>
                    <div className="bg-white rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{service.mockupDeparture}</p>
                          <p className="font-bold text-gray-900 text-sm">{service.mockupDepartureCity}</p>
                          <p className="text-xs text-gray-500">{service.mockupDepartureStation}</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 px-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                          </div>
                          <span className="text-xs text-gray-400">{service.mockupDuration}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400 mb-0.5">{service.mockupArrival}</p>
                          <p className="font-bold text-gray-900 text-sm">{service.mockupArrivalCity}</p>
                          <p className="text-xs text-gray-500">{service.mockupArrivalStation}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">{service.mockupSeat}</p>
                        <p className="font-bold text-blue-800 text-sm">{service.mockupSeatNumber}</p>
                        <p className="text-xs text-gray-500">{service.mockupRef}</p>
                      </div>
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

                {/* Inline illustration — colis */}
                {idx === 1 && (
                  <div className="mt-7 bg-orange-50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-orange-800">{service.mockupBadge}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">{service.mockupStatus}</span>
                    </div>
                    <div className="bg-white rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{service.mockupSenderLabel}</p>
                          <p className="font-bold text-gray-900 text-sm">{service.mockupSender}</p>
                        </div>
                        <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="text-right">
                          <p className="text-xs text-gray-400 mb-0.5">{service.mockupRecipientLabel}</p>
                          <p className="font-bold text-gray-900 text-sm">{service.mockupRecipient}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{service.mockupWeight}</span>
                        <span className="font-semibold text-orange-600">{service.mockupPrice}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-1">
                      {[service.mockupStep1, service.mockupStep2, service.mockupStep3].map((label, i) => (
                        <div key={label} className="flex items-center gap-1 flex-1">
                          <div className="flex flex-col items-center gap-1">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${i < 2 ? "bg-orange-500" : "bg-gray-200"} ${i === 1 ? "ring-2 ring-orange-300" : ""}`}>
                              {i < 2 && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-[10px] text-center leading-tight w-14 ${i < 2 ? "text-orange-700 font-medium" : "text-gray-400"}`}>{label}</span>
                          </div>
                          {i < 2 && <div className={`flex-1 h-0.5 mb-4 mx-0.5 ${i < 1 ? "bg-orange-400" : "bg-gray-200"}`} />}
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
                      color === "blue"
                        ? "text-blue-700 hover:text-blue-900"
                        : "text-orange-500 hover:text-orange-700"
                    }`}
                  >
                    {service.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap teaser */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            <span className="font-medium text-gray-700">{dict.comingLabel}</span>{" "}
            <a href="#contact" className="text-blue-700 font-medium hover:underline">
              {dict.comingCta}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
