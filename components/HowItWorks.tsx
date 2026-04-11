import type { Dictionary } from "@/context/DictionaryContext";

type Props = { dict: Dictionary["howItWorks"] };

const stepIcons = [
  <svg key="chat" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  <svg key="settings" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="trend" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

export default function HowItWorks({ dict }: Props) {
  return (
    <section id="comment-ca-marche" className="py-20 lg:py-28 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {dict.badge}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < dict.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3.5rem)] right-0 h-0.5 bg-gradient-to-r from-blue-200 to-blue-100" />
              )}

              <div className="bg-white rounded-2xl p-7 shadow-sm border border-blue-100 h-full">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center text-white">
                      {stepIcons[index]}
                    </div>
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center leading-none">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-4xl font-bold text-blue-100 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
          >
            {dict.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
