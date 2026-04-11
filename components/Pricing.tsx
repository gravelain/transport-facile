import DemoModal from "./DemoModal";
import RevenueSimulator from "./RevenueSimulator";
import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["pricing"]; simulatorDict: Dictionary["simulator"] };

const reassuranceIcons = [
  <svg key="shield" className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="trend" className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  <svg key="chat" className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
];

export default function Pricing({ dict, simulatorDict }: Props) {
  const highlightedIdx = 1; // Pro plan

  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {dict.badge}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {dict.title1}{" "}
            <span className="text-blue-700">{dict.title2}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.subtitle}{" "}
            <strong className="text-gray-900">{dict.subtitleStrong}</strong>
          </p>
        </div>

        {/* Revenue Simulator */}
        <div className="mb-10">
          <RevenueSimulator dict={simulatorDict} />
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
              <p className="font-bold text-white text-sm sm:text-base">{dict.trialTitle}</p>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5">{dict.trialSubtitle}</p>
            </div>
          </div>
          <DemoModal
            triggerLabel={dict.trialCta}
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
              <p className="font-bold text-gray-900">{dict.commonTitle}</p>
              <p className="text-sm text-gray-500">{dict.commonSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dict.commonFeatures.map((f) => (
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
          {dict.plans.map((plan, idx) => {
            const isHighlighted = idx === highlightedIdx;
            const isEnterprise = idx === 2;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col transition-all ${
                  isHighlighted
                    ? "bg-blue-700 shadow-2xl shadow-blue-900/25 ring-2 ring-blue-500 mt-6 md:mt-0 md:-translate-y-3"
                    : isEnterprise
                      ? "bg-blue-950 shadow-lg"
                      : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {/* Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      {dict.planBadge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Positioning + Name */}
                  <div className="mb-5">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                      isHighlighted ? "text-orange-300" : isEnterprise ? "text-blue-400" : "text-blue-600"
                    }`}>
                      {plan.positioning}
                    </p>
                    <p className={`text-xl font-extrabold leading-tight mb-1.5 ${
                      isHighlighted || isEnterprise ? "text-white" : "text-gray-900"
                    }`}>
                      {plan.name}
                    </p>
                    <p className={`text-sm leading-snug ${
                      isHighlighted || isEnterprise ? "text-white/90" : "text-gray-500"
                    }`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price block */}
                  <div className={`rounded-xl px-4 py-4 mb-5 ${
                    isHighlighted
                      ? "bg-blue-800/60"
                      : isEnterprise
                        ? "bg-white/10"
                        : "bg-gray-50 border border-gray-100"
                  }`}>
                    <p className={`text-3xl sm:text-4xl font-extrabold leading-none ${
                      isHighlighted || isEnterprise ? "text-white" : "text-gray-900"
                    }`}>
                      {plan.price}
                    </p>
                    <p className={`text-xs mt-1.5 ${
                      isHighlighted ? "text-blue-200" : isEnterprise ? "text-blue-300" : "text-gray-500"
                    }`}>
                      {plan.priceSuffix}
                    </p>

                    {/* Retained framing */}
                    <div className={`mt-3 pt-3 border-t ${
                      isHighlighted ? "border-blue-600" : isEnterprise ? "border-white/20" : "border-gray-200"
                    }`}>
                      <p className={`text-sm font-bold leading-snug ${
                        isHighlighted ? "text-orange-300" : isEnterprise ? "text-white" : "text-blue-700"
                      }`}>
                        {plan.retained}
                      </p>
                      {plan.priceNote && (
                        <p className={`text-xs mt-1.5 leading-snug ${
                          isHighlighted ? "text-blue-200" : isEnterprise ? "text-blue-300" : "text-gray-500"
                        }`}>
                          {plan.priceNote}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="flex-1 mb-6">
                    <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                      isHighlighted ? "text-white/70" : isEnterprise ? "text-blue-300" : "text-gray-400"
                    }`}>
                      {dict.extrasLabel}
                    </p>
                    <ul className="space-y-3">
                      {plan.extras.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isHighlighted ? "text-orange-400" : isEnterprise ? "text-blue-400" : "text-blue-600"
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm leading-relaxed ${
                            isHighlighted ? "text-white" : isEnterprise ? "text-blue-100" : "text-gray-700"
                          }`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.locked.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                        <p className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-2.5">
                          {dict.lockedLabel}
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
                  {isHighlighted ? (
                    <DemoModal
                      triggerLabel={plan.cta}
                      triggerClassName="w-full block text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/30 cursor-pointer transition-all"
                    />
                  ) : (
                    <a
                      href="#contact"
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
          {dict.reassurances.map((item, i) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-start gap-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                {reassuranceIcons[i]}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {item.desc}
                  {"link" in item && item.link && (
                    <>
                      {" "}
                      <a href="#contact" className="text-blue-700 font-semibold hover:underline">
                        {item.link}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
